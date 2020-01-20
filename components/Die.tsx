import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  YellowBox,
} from 'react-native';
import {eDice, iDie} from '../types/types';
import {Assets} from '../assets';
import Colors from '../theme/colors';

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
      <View style={[styles.medium, styles.dieContainer]}>
        <View
          style={[
            styles.die,
            styles[props.size || 'small'],
            styles[props.type],
            {opacity},
          ]}>
          <SvgComponent />
        </View>
        {props.showLabel && <Text style={[styles.dieText]}>{props.type}</Text>}
      </View>
    </TouchableHighlight>
  );
}

// <View style={[styles.die, styles[props.size || 'small']]}>
//   <Text style={[styles.dieText]}>{props.type}</Text>
// </View>
const styles = StyleSheet.create({
  dieContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'yellow',
  },
  die: {
    // backgroundColor: 'red',
    // margin: 10,
    // position: 'absolute',
    // top: 0,
    // left: 0,
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
  small: {height: 80, width: 80},
  medium: {height: 100, width: 100},
  large: {height: 120, width: 120},
  locked: {opacity: 0.5},
  [eDice.TWENTY]: {},
  [eDice.TWELVE]: {},
  [eDice.TEN]: {},
  [eDice.EIGHT]: {},
  [eDice.SIX]: {},
  [eDice.FOUR]: {},
});
