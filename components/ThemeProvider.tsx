import React, {Component} from 'react';
import {getColors, EColorTheme} from '../theme/colors';

const isDarkTheme = (theme: string) => theme.indexOf('dark') !== -1;

const defaultTheme = EColorTheme.DARK;

const defaultStateValues = {
  theme: defaultTheme,
  palette: getColors(defaultTheme),
  updateTheme: (_value: EColorTheme) =>
    console.warn('Provider not initialized'),
  isDarkTheme: isDarkTheme(defaultTheme),
};

// TODO: local storage
const Context = React.createContext(defaultStateValues);

export class AppContextProvider extends Component {
  state = {
    ...defaultStateValues,
    updateTheme: (theme: EColorTheme) => {
      console.log('new theme:', theme);
      this.setState({
        theme,
        palette: getColors(theme),
        isDarkTheme: isDarkTheme(theme),
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
