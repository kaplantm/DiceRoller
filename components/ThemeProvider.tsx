import React, {Component} from 'react';
import {getColors, EColorTheme} from '../theme/colors';
import {eSounds} from '../shared/sounds';

const isDarkTheme = (theme: string) => theme.indexOf('dark') !== -1;

const defaultTheme: EColorTheme = EColorTheme.DARK;
const defaultSound: eSounds = eSounds.MUTE;

const defaultStateValues = {
  theme: defaultTheme,
  showModifers: true,
  toggleShowModifers: () => console.warn('Provider not initialized'),
  palette: getColors(defaultTheme),
  sound: defaultSound,
  updateTheme: (_value: EColorTheme) =>
    console.warn('Provider not initialized'),
  updateSound: (_value: eSounds) => console.warn('Provider not initialized'),
  isDarkTheme: isDarkTheme(defaultTheme),
};

// TODO: local storage
const Context = React.createContext(defaultStateValues);

export class AppContextProvider extends Component {
  state = {
    ...defaultStateValues,
    updateTheme: (theme: EColorTheme) => {
      this.setState({
        ...this.state,
        theme,
        palette: getColors(theme),
        isDarkTheme: isDarkTheme(theme),
      });
    },
    updateSound: (sound: eSounds) => {
      this.setState({
        ...this.state,
        sound,
      });
    },
    toggleShowModifers: () => {
      this.setState({
        ...this.state,
        showModifers: !this.state.showModifers,
      });
    },
  };

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
