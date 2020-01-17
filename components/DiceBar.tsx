import React from 'react';
import {StyleSheet, View} from 'react-native';
import Colors from '../theme/colors';
import {Die} from './Die';
import {DICE_TYPES} from '../constants/constants';

declare var global: {HermesInternal: null | {}};

const DiceBar = ({onDieClick}: {onDieClick: any}) => {
  function renderOneOfEachDice() {
    console.log({onDieClick});
    return DICE_TYPES.map(type => (
      <View style={styles.dieContainer} key={type}>
        <Die
          type={type}
          locked={true}
          currentValue={type}
          onClick={onDieClick}
        />
      </View>
    ));
  }
  return (
    <View style={styles.staticDiceContainer}>{renderOneOfEachDice()}</View>
  );
};

const styles = StyleSheet.create({
  staticDiceContainer: {
    paddingVertical: 20,
    backgroundColor: Colors.mediumDark,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dieContainer: {
    backgroundColor: 'pink',
    alignItems: 'center',
    flex: 1,
    flexBasis: '33%',
    flexGrow: 1,
  },
});

export default DiceBar;