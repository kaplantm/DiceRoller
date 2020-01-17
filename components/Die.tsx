import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {eDice, iDie} from '../types/types';

export function Die(props: iDie) {
  console.log({onClick: props.onClick});
  return (
    <View
      style={[styles.die, styles[props.type]]}
      onTouchEnd={() =>
        props.onClick &&
        props.onClick({
          type: props.type,
          locked: false,
          currentValue: Math.ceil(Math.random() * props.type),
        })
      }>
      <Text>{props.currentValue}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  die: {
    height: 70,
    width: 70,
    margin: 10,
  },
  [eDice.TWENTY]: {backgroundColor: 'red'},
  [eDice.TWELVE]: {backgroundColor: 'green'},
  [eDice.TEN]: {backgroundColor: 'blue'},
  [eDice.EIGHT]: {backgroundColor: 'yellow'},
  [eDice.SIX]: {backgroundColor: 'violet'},
  [eDice.FOUR]: {backgroundColor: 'orange'},
});
