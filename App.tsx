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
import {SafeAreaView, StyleSheet, ScrollView, View, Text} from 'react-native';
import Colors from './theme/colors';
import DiceBar from './components/DiceBar';
import {Die} from './components/Die';
import {iDie} from 'types/types';

declare var global: {HermesInternal: null | {}};

const App = () => {
  const [activeDice, setActiveDice] = useState<iDie[]>([]);

  function renderActiceDice() {
    return activeDice.map((activeDie: iDie) => <Die {...activeDie} />);
  }

  const addActiveDie = (newDie: iDie) => {
    console.log('do');
    setActiveDice([...activeDice, newDie]);
  };

  return (
    <View style={styles.appContainer}>
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.scrollViewWrapper}>
          <Text>Dice!</Text>
          <ScrollView
            // @ts-ignore
            ref={ref => (this.scrollView = ref)}
            onContentSizeChange={() => {
              // @ts-ignore
              this.scrollView.scrollToEnd({animated: true});
            }}>
            <View style={styles.scrollView}>{renderActiceDice()}</View>
          </ScrollView>
        </View>
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
  scrollView: {flex: 1, flexDirection: 'row', flexWrap: 'wrap'},
});

export default App;
