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
  ScrollView,
  View,
  Text,
  Button,
} from 'react-native';
import Colors from './theme/colors';
import DiceBar from './components/DiceBar';
import {Die} from './components/Die';
import {iDie} from 'types/types';

const App = () => {
  const [activeDice, setActiveDice] = useState<iDie[]>([]);

  function renderActiveDice() {
    const size =
      activeDice.length > 10
        ? 'small'
        : activeDice.length > 5
        ? 'medium'
        : 'large';
    return activeDice.map((activeDie: iDie, index: number) => (
      <Die
        {...activeDie}
        size={size}
        index={index}
        onDoubleClick={removeActiveDie}
        onLongPress={toggleLockActiveDie}
        key={`activeDie${index}`}
      />
    ));
  }

  function reRollUnlocked() {
    setActiveDice(
      activeDice.map((die: iDie) => {
        if (!die.locked) {
          die.currentValue = Math.ceil(Math.random() * die.type);
        }
        return die;
      }),
    );
  }

  function getTotal() {
    const reducer = (accumulator: number, currentDie: iDie) =>
      accumulator + (currentDie.currentValue || 0);
    return activeDice.reduce(reducer, 0);
  }

  function clearAllDice() {
    setActiveDice([]);
  }

  const addActiveDie = (newDie: iDie) => {
    setActiveDice([...activeDice, newDie]);
  };

  const removeActiveDie = (activeDie: iDie) => {
    if (activeDie.index !== undefined) {
      const activeArrayCopy = [...activeDice];
      activeArrayCopy.splice(activeDie.index, 1);
      setActiveDice(activeArrayCopy);
    }
  };

  const toggleLockActiveDie = (activeDie: iDie) => {
    if (activeDie.index !== undefined) {
      const activeArrayCopy = [...activeDice];
      activeArrayCopy[activeDie.index].locked = !activeArrayCopy[
        activeDie.index
      ].locked;
      setActiveDice(activeArrayCopy);
    }
  };

  return (
    <View style={styles.appContainer}>
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.scrollViewWrapper}>
          <Text>Total: {getTotal()}</Text>
          <ScrollView
            // @ts-ignore
            ref={ref => (this.scrollView = ref)}
            onContentSizeChange={() => {
              // @ts-ignore
              this.scrollView.scrollToEnd({animated: true});
            }}>
            <View style={styles.scrollView}>{renderActiveDice()}</View>
          </ScrollView>
        </View>

        <Button title="Clear All" onPress={clearAllDice} />
        <Button title="Re Roll" onPress={reRollUnlocked} />
        <DiceBar onDieClick={addActiveDie} />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.dark,
  },
  scrollViewWrapper: {
    flex: 1,
    backgroundColor: Colors.light,
  },
  scrollViewWrapper2: {
    flex: 1,
    backgroundColor: Colors.mediumLight,
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
