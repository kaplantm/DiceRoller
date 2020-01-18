import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import {eDice, iDie} from '../types/types';

export function Die(props: iDie) {
  const [lastPressTime, setLastPressTime] = useState(0);
  const [timeOutState, setTimeoutState] = useState();

  const actionParams = {
    type: props.type,
    locked: false,
    currentValue: Math.ceil(Math.random() * props.type),
    index: props.index,
  };

  const doubleTapMaxTime = 200;
  const onPress = () => {
    var delta = new Date().getTime() - lastPressTime;

    if (delta < doubleTapMaxTime && props.onDoubleClick) {
      clearTimeout(timeOutState);
      props.onDoubleClick && props.onDoubleClick(actionParams);
    } else {
      if (props.onDoubleClick) {
        setTimeoutState(
          setTimeout(() => {
            props.onClick && props.onClick(actionParams);
          }, doubleTapMaxTime + 10),
        );
      } else {
        props.onClick && props.onClick(actionParams);
      }
    }

    setLastPressTime(new Date().getTime());
  };

  const opacity = props.locked ? 0.5 : 1;

  function handleLongPress() {
    props.onLongPress && props.onLongPress(actionParams);
  }

  return (
    <TouchableHighlight
      activeOpacity={1}
      underlayColor={'hsla(178, 0%, 100%, .3)'}
      style={[styles.highlight]}
      onPress={onPress}
      onLongPress={handleLongPress}>
      <View
        style={[
          styles.die,
          styles[props.type],
          styles[props.size || 'small'],
          {opacity},
        ]}>
        <Text>{props.currentValue}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  die: {
    margin: 10,
  },
  highlight: {
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  small: {height: 80, width: 80},
  medium: {height: 100, width: 100},
  large: {height: 120, width: 120},
  locked: {opacity: 0.5},
  [eDice.TWENTY]: {backgroundColor: 'red'},
  [eDice.TWELVE]: {backgroundColor: 'green'},
  [eDice.TEN]: {backgroundColor: 'blue'},
  [eDice.EIGHT]: {backgroundColor: 'yellow'},
  [eDice.SIX]: {backgroundColor: 'violet'},
  [eDice.FOUR]: {backgroundColor: 'orange'},
});
