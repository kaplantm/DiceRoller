/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  View,
  PanResponder,
  PanResponderStatic,
} from 'react-native';
import Colors from './theme/colors';
import {iDie} from './types/types';
import DiceView from './components/DiceView';

const App = () => {
  const [instructionMode, setInstructionMode] = useState<boolean>(false);

  const [outsideTarget, setOutsideTarget] = useState<boolean>(true);
  const [currentInstruction, setCurrentInstruction] = useState<string>(
    'Click any element on screen to learn more.',
  );

  const touchThreshold = 20;

  // let _panResponder = PanResponder.create({
  //   onMoveShouldSetPanResponderCapture: (evt, gestureState) => {
  //     console.log('onMoveShouldSetPanResponderCapture');
  //     const {dx, dy} = gestureState;

  //     return Math.abs(dx) > touchThreshold || Math.abs(dy) > touchThreshold;
  //   },
  //   onPanResponderMove: (evt, gestureState) => {
  //     console.log('Responder' + evt.nativeEvent.target);
  //     setOutsideTarget(true);
  //     // The most recent move distance is gestureState.move{X,Y}

  //     // The accumulated gesture distance since becoming responder is
  //     // gestureState.d{x,y}
  //   },
  //   onPanResponderTerminationRequest: (evt, gestureState) => true,
  // });

  const panResponder = React.useMemo(
    () =>
      PanResponder.create({
        // Ask to be the responder:
        onStartShouldSetPanResponder: (evt, gestureState) => {
          console.log('onStartShouldSetPanResponder');
          return true;
        },
        // onMoveShouldSetPanResponder: (evt, gestureState) => {
        //   console.log('onMoveShouldSetPanResponder');
        //   return true;
        // },
        onPanResponderGrant: (evt, gestureState) => {
          console.log('onPanResponderGrant');
          setOutsideTarget(true);
          return true;
        },
        // onPanResponderMove: (evt, gestureState) => {
        //   console.log('onPanResponderMove');
        //   return true;
        // },
        onPanResponderTerminationRequest: (evt, gestureState) => {
          console.log('onPanResponderTerminationRequest');
          return true;
        },
      }),
    [],
  );

  useEffect(() => {
    console.log('USE EFFECT', panResponder);
    if (!panResponder) {
      console.log('no pan');
    } else {
      if (outsideTarget) {
        console.log('Success', 'Component Clicked OutSide');
      } else if (outsideTarget) {
        console.log('Success', 'Component Clicked Inside');
      }
    }
  }, [outsideTarget]);

  const setOutsideTargetFunc = () => {
    console.log('inside');
    setOutsideTarget(false);
  };

  return (
    <View
      style={styles.appContainer}
      {...(panResponder ? panResponder.panHandlers : {})}>
      <SafeAreaView
        style={styles.appContainer}
        {...(panResponder ? panResponder.panHandlers : {})}>
        {instructionMode && (
          <View style={styles.instructionContainer}>
            <Text style={styles.instructionContainerText}>
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
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.light,
  },
  instructionContainer: {
    backgroundColor: Colors.dark,
    padding: 10,
    minHeight: 80,
    justifyContent: 'center',
  },
  instructionContainerText: {
    color: Colors.light,
    fontSize: 15,
    fontWeight: '600',
  },
  scrollViewWrapper: {
    flex: 1,
    backgroundColor: Colors.light,
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
