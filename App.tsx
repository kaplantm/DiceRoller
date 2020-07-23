/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  PanResponder,
  StatusBar,
} from 'react-native';
import DiceView from './components/DiceView';
import Settings from './components/Settings';
import {AppContextProvider, AppConsumer} from './components/ThemeProvider';

// TODO: change name of pro app in xcode
// TODO: app icon for pro version
// TODO: ipad images for both?

const App = () => {
  const [instructionMode, setInstructionMode] = useState<boolean>(false);

  const [outsideTarget, setOutsideTarget] = useState<boolean>(true);
  const [currentInstruction, setCurrentInstruction] = useState<string>(
    'Click any element below to learn more.',
  );

  const panResponder = React.useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => {
          return true;
        },
        onPanResponderGrant: () => {
          setOutsideTarget(true);
          return true;
        },
        onPanResponderTerminationRequest: () => {
          return true;
        },
      }),
    [],
  );

  const setOutsideTargetFunc = () => {
    setOutsideTarget(false);
  };

  return (
    <AppContextProvider>
      <AppConsumer>
        {appConsumer => (
          <>
            <StatusBar
              barStyle={
                appConsumer.isDarkTheme ? 'dark-content' : 'light-content'
              }
            />
            <View
              style={[
                styles.appContainer,
                {
                  backgroundColor: appConsumer.palette.light,
                },
              ]}
              {...(panResponder ? panResponder.panHandlers : {})}>
              <SafeAreaView
                style={[
                  styles.top,
                  {backgroundColor: appConsumer.palette.dark},
                ]}
              />
              <SafeAreaView
                style={styles.appContainer}
                {...(panResponder ? panResponder.panHandlers : {})}>
                <Settings
                  instructionMode={instructionMode}
                  setCurrentInstruction={setCurrentInstruction}
                />
                {instructionMode && (
                  <View
                    style={[
                      styles.instructionContainer,
                      {
                        backgroundColor: appConsumer.palette.dark,
                      },
                    ]}>
                    <Text
                      style={[
                        styles.instructionContainerText,
                        {color: appConsumer.palette.light},
                      ]}>
                      {currentInstruction}
                    </Text>
                  </View>
                )}
                <DiceView
                  setInstructionMode={setInstructionMode}
                  instructionMode={instructionMode}
                  setCurrentInstruction={setCurrentInstruction}
                  setOutsideTargetFunc={setOutsideTargetFunc}
                  outsideTarget={outsideTarget}
                />
              </SafeAreaView>
            </View>
          </>
        )}
      </AppConsumer>
    </AppContextProvider>
  );
};

const styles = StyleSheet.create({
  top: {
    flex: 0,
  },
  appContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  settingsContainer: {
    padding: 10,
    minHeight: 80,
    justifyContent: 'center',
  },
  instructionContainer: {
    marginTop: 20,
    padding: 10,
    minHeight: 80,
    justifyContent: 'center',
  },
  instructionContainerText: {
    fontSize: 15,
    fontWeight: '600',
  },
  scrollView: {
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default App;
