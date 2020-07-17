import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, PanResponder} from 'react-native';
import Colors from '../theme/colors';
import DiceView from '../components/DiceView';

const Home = () => {
  const [instructionMode, setInstructionMode] = useState<boolean>(false);

  const [outsideTarget, setOutsideTarget] = useState<boolean>(true);
  const [currentInstruction, setCurrentInstruction] = useState<string>(
    'Click any element on screen to learn more.',
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

export default Home;
