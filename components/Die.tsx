import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import {eDice, iDie} from '../types/types';
import {Assets} from '../assets';
import Colors from '../theme/colors';
import {textPositionMap} from '../constants/constants';
import DieModifierEditor from './DieModifierEditor';
import {
  doFunctionAtIntervalForTime,
  randomNumberInRange,
} from '../shared/helpers';

export default function Die(
  props: iDie & {
    updateActiveDieModifier?: any;
    instructionMode: boolean;
    setModifierInstructions: any;
    setOutsideTargetFunc: any;
    outsideTarget: boolean;
  },
) {
  console.log({outsideTarget: props.outsideTarget});
  const [lastPressTime, setLastPressTime] = useState(0);
  const [timeOutState, setTimeoutState] = useState();
  const [showEditModifierPane, setShowEditModifierPane] = useState(false);
  const [modifier, setModifier] = useState(props.modifier || 0);
  const [displayValue, setDisplayValue] = useState(props.currentValue);
  const [rollOpacity, setRollOpacity] = useState(props.opacity);

  useEffect(() => {
    console.log('useEffect to set die value');
    doFunctionAtIntervalForTime(
      (timeEllapsed: number) => {
        setDisplayValue(Math.ceil(Math.random() * props.type));
        setRollOpacity(timeEllapsed / 600 + 0.5);
      },
      60,
      300,
      () => {
        setDisplayValue(props.currentValue);
        setRollOpacity(1);
      },
    );
  }, [props.currentValue]);

  useEffect(() => {
    console.log('USE EFFECT DIE', props.outsideTarget);
    if (props.outsideTarget) {
      setShowEditModifierPane(false);
    }
  }, [props.outsideTarget]);

  const actionParams = {
    type: props.type,
    locked: false,
    currentValue: Math.ceil(Math.random() * props.type),
    index: props.index,
    modifier,
  };

  const doubleTapMaxTime = 200;
  const onPress = () => {
    props.setOutsideTargetFunc && props.setOutsideTargetFunc(true);
    console.log('onpress', props.setOutsideTargetFunc);
    setShowEditModifierPane(false);
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

  function toggleShowEditModifierPane() {
    props.setOutsideTargetFunc && props.setOutsideTargetFunc(true);
    setShowEditModifierPane(!showEditModifierPane);
  }

  function handleLongPress() {
    props.setOutsideTargetFunc && props.setOutsideTargetFunc(true);
    props.onLongPress && props.onLongPress(actionParams);
  }

  function updateModifier(value: number) {
    setModifier(value);
    props.updateActiveDieModifier &&
      props.updateActiveDieModifier(props.index, value);
  }

  const opacity = props.opacity || (props.locked ? 0.3 : 1);
  const SvgComponent = Assets.svgComponents[props.type];

  const DieContainerComponent = props.onLongPress
    ? TouchableHighlight
    : TouchableOpacity;

  const DieContainerComponentProps = props.onLongPress
    ? {
        activeOpacity: 1,
        underlayColor: 'hsla(178, 0%, 100%, .8)',
        onLongPress: handleLongPress,
      }
    : {};
  return (
    <>
      <DieContainerComponent
        {...DieContainerComponentProps}
        style={[styles.highlight]}
        onPress={onPress}>
        <View
          style={[
            styles[props.size || 'small'],
            styles.dieContainer,
            {opacity: rollOpacity},
          ]}>
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
            <Text style={[styles.dieText]}>{displayValue}</Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.5}
            style={[
              styles.modifierContainer,
              modifier && modifier >= 0
                ? styles.positiveModifier
                : modifier === 0
                ? styles.zeroModifier
                : styles.negativeModifier,
            ]}
            onPress={
              props.instructionMode
                ? props.setModifierInstructions
                : toggleShowEditModifierPane
            }>
            <Text style={[styles.modifierText]}>{modifier || 0}</Text>
          </TouchableOpacity>
        </View>
      </DieContainerComponent>
      {showEditModifierPane && !props.outsideTarget && (
        <DieModifierEditor
          setModifier={
            props.instructionMode
              ? props.setModifierInstructions
              : updateModifier
          }
          modifier={modifier}
          setEditModifier={setShowEditModifierPane}
          editModifier={showEditModifierPane}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  dieContainer: {
    alignItems: 'center',
    justifyContent: 'center',
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
  modifierContainer: {
    position: 'absolute',
    bottom: 3,
    right: 3,
    height: 32,
    width: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: Colors.mediumLight,
  },
  zeroModifier: {
    backgroundColor: Colors.blue.lighter,
  },
  positiveModifier: {
    backgroundColor: Colors.green.lighter,
  },
  negativeModifier: {
    backgroundColor: Colors.red.lighter,
  },
  modifierText: {
    fontSize: 13,
    color: Colors.light,
    fontWeight: '800',
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
