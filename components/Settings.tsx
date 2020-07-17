import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {AppConsumer} from './ThemeProvider';
import {EColorTheme, colorThemesArray} from '../theme/colors';

function getNextTheme(currentTheme = EColorTheme.BLUE) {
  const currentIndex = colorThemesArray.indexOf(currentTheme);

  console.log({currentTheme, currentIndex}, colorThemesArray[0]);
  if (currentIndex === -1) {
    return colorThemesArray[0];
  }
  return colorThemesArray[(currentIndex + 1) % colorThemesArray.length];
}

// TODO: collaspble settings icon
// TODO: hide modifiers
const Settings = () => {
  return (
    <AppConsumer>
      {appConsumer => (
        <View
          style={[
            styles.container,
            {
              backgroundColor: appConsumer.palette.dark,
            },
          ]}>
          <TouchableOpacity
            onPress={() => {
              appConsumer.updateTheme(getNextTheme(appConsumer.theme));
            }}
            style={[
              {
                backgroundColor: appConsumer.palette.colorSet.main,
                borderColor: appConsumer.palette.light,
              },
              styles.buttonStyle,
            ]}>
            <View
              style={[
                styles.splitDown,
                {
                  borderBottomColor: appConsumer.palette.light,
                },
              ]}
            />
            <View
              style={[
                styles.splitBorder,
                {borderColor: appConsumer.palette.light},
              ]}
            />
          </TouchableOpacity>
        </View>
      )}
    </AppConsumer>
  );
};

const buttonSize = 40;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  splitDown: {
    position: 'absolute',
    top: 2,
    borderStyle: 'solid',
    borderBottomWidth: buttonSize - 2,
    borderLeftWidth: buttonSize - 2,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
  },
  buttonStyle: {
    position: 'relative',
    overflow: 'hidden',
    width: buttonSize,
    height: buttonSize,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.62,
    elevation: 4,
  },
  splitBorder: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: buttonSize,
    height: buttonSize,
    borderWidth: 3,
    borderRadius: 3,
  },
});

export default Settings;
