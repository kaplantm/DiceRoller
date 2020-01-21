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
import {SafeAreaView, StyleSheet, ScrollView, Text, View} from 'react-native';
import Colors from './theme/colors';
import {iDie} from './types/types';
import DiceView from './components/DiceView';

const App = () => {
  const [instructionMode, setInstructionMode] = useState<boolean>(false);
  const [currentInstruction, setCurrentInstruction] = useState<string>(
    'Click any element on screen to learn more.',
  );

  return (
    <View style={styles.appContainer}>
      <SafeAreaView style={styles.appContainer}>
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
