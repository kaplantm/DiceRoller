import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {AppConsumer} from './ThemeProvider';
import {EColorTheme, colorThemesArray} from '../theme/colors';
import {appSounds, appSoundsArray, eSounds, playSound} from '../shared/sounds';
import Sound from 'react-native-sound';

const buttonSize = 30;
const modifierSize = 15;

function getNextTheme(currentTheme = EColorTheme.BLUE) {
  const currentIndex = colorThemesArray.indexOf(currentTheme);

  if (currentIndex === -1) {
    return colorThemesArray[0];
  }
  return colorThemesArray[(currentIndex + 1) % colorThemesArray.length];
}

function getNextSound(currentSound = eSounds.MUTE) {
  const currentIndex = appSoundsArray.indexOf(currentSound);

  if (currentIndex === -1) {
    return appSoundsArray[0];
  }
  return appSoundsArray[(currentIndex + 1) % appSoundsArray.length];
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
          <Text
            style={[
              styles.title,
              {
                color: appConsumer.isDarkTheme
                  ? appConsumer.palette.darker
                  : appConsumer.palette.light,
              },
            ]}>
            DndDice
          </Text>
          <View style={styles.group}>
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
            <TouchableOpacity
              onPress={appConsumer.toggleShowModifers}
              style={[
                {
                  backgroundColor: appConsumer.palette.colorSet.main,
                  borderColor: appConsumer.palette.mediumLight,
                },
                styles.buttonStyle,
                styles.modButton,
              ]}>
              {appConsumer.showModifers && (
                <View
                  style={[
                    styles.circle,
                    {
                      backgroundColor: appConsumer.palette.zeroModifier,
                      borderColor: appConsumer.palette.light,
                    },
                  ]}
                />
              )}
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle}>
              <Icon
                onPress={() => {
                  const newSound = getNextSound(appConsumer.sound);
                  appConsumer.updateSound(newSound);
                  playSound(newSound);
                }}
                name={appConsumer.sound}
                size={buttonSize}
                color={appConsumer.palette.light}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </AppConsumer>
  );
};

const styles = StyleSheet.create({
  group: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
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
  circle: {
    position: 'absolute',
    width: modifierSize,
    height: modifierSize,
    bottom: -modifierSize / 2,
    right: -modifierSize / 2,
    borderRadius: modifierSize,
    borderWidth: 2,
  },
  title: {
    paddingLeft: 15,
    fontWeight: '600',
    letterSpacing: 2,
    fontSize: 20,
  },
  buttonStyle: {
    position: 'relative',
    overflow: 'hidden',
    width: buttonSize,
    height: buttonSize,
    margin: 10,
  },
  modButton: {
    overflow: 'visible',
    borderWidth: 3,
    borderRadius: 3,
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
