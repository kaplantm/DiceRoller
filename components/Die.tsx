import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';
import {eDice, iDie} from '../types/types';
import {Assets} from '../assets';
import Colors from '../theme/colors';
import {textPositionMap} from '../constants/constants';

export default function Die(props: iDie) {
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

  const opacity = props.opacity || (props.locked ? 0.5 : 1);

  console.log(props.opacity, opacity);
  function handleLongPress() {
    props.onLongPress && props.onLongPress(actionParams);
  }

  const SvgComponent = Assets.svgComponents[props.type];

  return (
    <TouchableHighlight
      activeOpacity={1}
      underlayColor={'hsla(178, 0%, 100%, .3)'}
      style={[styles.highlight]}
      onPress={onPress}
      onLongPress={handleLongPress}>
      <View style={[styles[props.size || 'small'], styles.dieContainer]}>
        <View
          style={[
            styles.die,
            styles[props.size || 'small'],
            styles[props.type],
            {opacity},
          ]}>
          <SvgComponent />
        </View>
        <View
          style={[
            styles.dieTextContainer,
            styles[props.size || 'small'],
            styles[props.type],
            {
              ...textPositionMap[props.type].small,
              ...textPositionMap[props.type][props.size || 'small'],
            },
          ]}>
          <Text style={[styles.dieText]}>{props.currentValue}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  dieContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'yellow',
  },
  die: {
    // backgroundColor: 'red',
    padding: 8,
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dieTextContainer: {
    // backgroundColor: 'orange',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dieText: {
    fontSize: 20,
    fontWeight: '800',
    color: Colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
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
  small: {height: 100, width: 100},
  medium: {height: 120, width: 120},
  large: {height: 140, width: 140},
  locked: {opacity: 0.5},
  [eDice.TWENTY]: {},
  [eDice.TWELVE]: {},
  [eDice.TEN]: {},
  [eDice.EIGHT]: {},
  [eDice.SIX]: {},
  [eDice.FOUR]: {},
});
