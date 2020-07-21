import React, {Component} from 'react';
import {getColors, EColorTheme, colorThemesArray} from '../theme/colors';
import {eSounds, rollingSoundsArray} from '../shared/sounds';
import {
  getLocalData,
  THEME_STORAGE_KEY,
  SOUND_STORAGE_KEY,
  MODIFIER_STORAGE_KEY,
  storeLocalData,
} from '../shared/asyncStorage';

const isDarkTheme = (theme: string) => theme.indexOf('dark') !== -1;

const defaultTheme: EColorTheme = EColorTheme.BLUE;
const defaultSound: eSounds = eSounds.MUTE;

const defaultStateValues = {
  theme: defaultTheme,
  showModifers: true,
  toggleShowModifers: (_event: any, _newValue: boolean) =>
    console.warn('Provider not initialized'),
  palette: getColors(defaultTheme),
  sound: defaultSound,
  updateTheme: (_value: EColorTheme) =>
    console.warn('Provider not initialized'),
  updateSound: (_value: eSounds) => console.warn('Provider not initialized'),
  isDarkTheme: isDarkTheme(defaultTheme),
};

const Context = React.createContext(defaultStateValues);

export class AppContextProvider extends Component {
  state = {
    ...defaultStateValues,
    updateTheme: (theme: EColorTheme) => {
      storeLocalData(THEME_STORAGE_KEY, theme);
      this.setState({
        ...this.state,
        theme,
        palette: getColors(theme),
        isDarkTheme: isDarkTheme(theme),
      });
    },
    updateSound: (sound: eSounds) => {
      storeLocalData(SOUND_STORAGE_KEY, sound);
      this.setState({
        ...this.state,
        sound,
      });
    },
    toggleShowModifers: (_event: any, newValue: boolean) => {
      const showModifers = newValue ? newValue : !this.state.showModifers;
      storeLocalData(MODIFIER_STORAGE_KEY, showModifers ? 'true' : 'false');
      this.setState({
        ...this.state,
        showModifers,
      });
    },
  };

  async loadFromStorage() {
    const theme =
      ((await getLocalData(THEME_STORAGE_KEY)) as EColorTheme) ||
      defaultStateValues.theme;

    const sound =
      ((await getLocalData(SOUND_STORAGE_KEY)) as eSounds) ||
      defaultStateValues.sound;
    const showModifersString = await getLocalData(MODIFIER_STORAGE_KEY);
    const showModifers = showModifersString
      ? showModifersString === 'true'
      : defaultStateValues.showModifers;
    this.state.updateTheme(
      colorThemesArray.indexOf(theme) !== -1 ? theme : defaultStateValues.theme,
    );
    this.state.updateSound(
      rollingSoundsArray.indexOf(sound) !== -1
        ? sound
        : defaultStateValues.sound,
    );
    this.state.toggleShowModifers(null, showModifers);
  }

  componentDidMount() {
    this.loadFromStorage();
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const AppConsumer = Context.Consumer;
export const AppContext = Context;
