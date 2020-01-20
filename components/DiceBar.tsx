import React from 'react';
import {StyleSheet, View} from 'react-native';
import Colors from '../theme/colors';
import Die from './Die';
import {DICE_TYPES} from '../constants/constants';
import globalStyles from '../theme/globalStyle';

const DiceBar = ({onDieClick}: {onDieClick: any}) => {
  function renderOneOfEachDice() {
    return DICE_TYPES.map(type => (
      <View style={styles.dieContainer} key={type}>
        <Die
          type={type}
          locked={true}
          currentValue={type}
          onClick={onDieClick}
          opacity={1}
          showLabel={true}
        />
      </View>
    ));
  }
  return (
    <View style={[globalStyles.topShadow]}>
      <View style={[globalStyles.bottomShadow, styles.staticDiceContainer]}>
        {renderOneOfEachDice()}
      </View>
    </View>
  );
};

// <View style={[styles.dieContainerShadow, globalStyles.bottomShadow]} />
const styles = StyleSheet.create({
  staticDiceContainer: {
    backgroundColor: Colors.mediumLight,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dieContainer: {
    // backgroundColor: Colors.lighter,
    alignItems: 'center',
    flex: 1,
    flexBasis: '33%',
    flexGrow: 1,
  },
});

export default DiceBar;
