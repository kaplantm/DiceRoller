import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import {eDice, iDie, size} from '../types/types';
import {Assets} from '../assets';
import {textPositionMap} from '../constants/constants';
import DieModifierEditor from './DieModifierEditor';
import {doFunctionAtIntervalForTime} from '../shared/helpers';
import {Dimensions} from 'react-native';
import {AppConsumer} from './ThemeProvider';

export default function Die(
  props: iDie & {
    updateActiveDieModifier?: any;
    instructionMode: boolean;
    setModifierInstructions: any;
    setOutsideTargetFunc: any;
    outsideTarget: boolean;
  },
) {
  const screenWidth = Math.round(Dimensions.get('window').width);
  const [lastPressTime, setLastPressTime] = useState(0);
  const [timeOutState, setTimeoutState] = useState();
  const [showEditModifierPane, setShowEditModifierPane] = useState(false);
  const [modifier, setModifier] = useState(props.modifier || 0);
  const [displayValue, setDisplayValue] = useState(props.currentValue);
  const [isRolling, setIsRolling] = useState(false);
  const [rollOpacity, setRollOpacity] = useState(props.opacity);

  useEffect(() => {
    doFunctionAtIntervalForTime(
      () => {
        setDisplayValue(Math.ceil(Math.random() * props.type));
        setIsRolling(true);
        setRollOpacity(Math.random() + 0.3);
      },
      60,
      300,
      () => {
        setDisplayValue(props.currentValue);
        setIsRolling(false);
        setRollOpacity(1);
      },
    );
  }, [props.currentValue, props.type]);

  useEffect(() => {
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

  function getScaleClass(): size {
    if (screenWidth < 600) {
      return `${props.size || 'small'}_x1` as size;
    }
    return `${props.size || 'small'}_x2` as size;
  }

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
        underlayColor: 'transparent',
        onLongPress: handleLongPress,
      }
    : {};
  return (
    <AppConsumer>
      {appConsumer => (
        <>
          <DieContainerComponent
            {...DieContainerComponentProps}
            style={[styles.highlight]}
            onPress={onPress}>
            <View
              style={[
                styles[getScaleClass()],
                styles.dieContainer,
                // eslint-disable-next-line react-native/no-inline-styles
                {opacity: rollOpacity, margin: screenWidth > 600 ? 10 : 0},
              ]}>
              <View
                style={[
                  styles.die,
                  styles[getScaleClass()],
                  styles[props.type],
                  {
                    opacity,
                  },
                ]}>
                <SvgComponent rolling={isRolling} />
              </View>
              <View
                style={[
                  styles.dieTextContainer,
                  styles[getScaleClass()],
                  styles[props.type],
                  {
                    ...textPositionMap[props.type].small_x1,
                    ...textPositionMap[props.type][getScaleClass()],
                  },
                ]}>
                <Text
                  style={[styles.dieText, {color: appConsumer.palette.white}]}>
                  {displayValue && Math.floor(displayValue)}
                </Text>
              </View>

              <TouchableOpacity
                activeOpacity={0.5}
                style={[
                  styles.modifierContainer,
                  modifier && modifier >= 0
                    ? {backgroundColor: appConsumer.palette.posModifier}
                    : modifier === 0
                    ? {
                        backgroundColor: appConsumer.palette.zeroModifier,
                      }
                    : {backgroundColor: appConsumer.palette.negModifier},
                  {
                    borderColor: appConsumer.palette.mediumLight,
                  },
                ]}
                onPress={
                  props.instructionMode
                    ? props.setModifierInstructions
                    : toggleShowEditModifierPane
                }>
                <Text
                  style={[
                    styles.modifierText,
                    {
                      color: appConsumer.palette.light,
                    },
                  ]}>
                  {modifier || 0}
                </Text>
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
      )}
    </AppConsumer>
  );
}

const styles = StyleSheet.create({
  dieContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  die: {
    padding: 8,
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dieTextContainer: {
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
  },
  modifierText: {
    fontSize: 13,
    fontWeight: '800',
  },
  dieText: {
    fontSize: 20,
    fontWeight: '800',
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
  small_x1: {height: 100, width: 100},
  medium_x1: {height: 120, width: 120},
  large_x1: {height: 140, width: 140},
  small_x2: {height: 180, width: 180},
  medium_x2: {height: 220, width: 220},
  large_x2: {height: 260, width: 260},
  locked: {opacity: 0.5},
  [eDice.TWENTY]: {},
  [eDice.TWELVE]: {},
  [eDice.TEN]: {},
  [eDice.EIGHT]: {},
  [eDice.SIX]: {},
  [eDice.FOUR]: {},
});
