import React, {useState, useEffect, useRef, useContext} from 'react';
import {StyleSheet, ScrollView, View, Vibration} from 'react-native';
import RNShake from 'react-native-shake';
import DiceBar from '../components/DiceBar';
import Die from '../components/Die';
import {iDie} from '../types/types';
import ButtonBar from '../components/ButtonBar';
import {AppConsumer, AppContext} from './ThemeProvider';
import {eSounds, playSound} from '../shared/sounds';

const DiceView = ({
  setInstructionMode,
  instructionMode,
  setCurrentInstruction,
  setOutsideTargetFunc,
  outsideTarget,
}: {
  setInstructionMode: any;
  instructionMode: boolean;
  setCurrentInstruction: any;
  setOutsideTargetFunc: any;
  outsideTarget: boolean;
}) => {
  const [activeDice, setActiveDice] = useState<iDie[]>([]);
  const [modifier, setModifier] = useState<number>(0);
  const context = useContext(AppContext);

  useEffect(() => {
    RNShake.addEventListener('ShakeEvent', () => {
      debouncedReRollUnlockedWithVibration();
    });
    return function cleanup() {
      RNShake.removeEventListener('ShakeEvent');
    };
  });

  function addActiveDieInstructions() {
    setCurrentInstruction('Dice menu. Click any dice to roll it.');
  }
  function reRollUnlockedInstructions() {
    setCurrentInstruction(
      'Rerolls all unlocked dice. Press and hold on any rolled die to toggle die lock. You can also shake your device to reroll.',
    );
  }
  function clearAllDiceInstructions() {
    setCurrentInstruction('Clears all dice.');
  }
  function clickActiveDieInstructions() {
    setCurrentInstruction(
      'A rolled die. Double click to delete die. Press and hold to toggle die lock. Locked dice will not be rerolled.',
    );
  }

  function setSingleDieModifierInstructions() {
    setCurrentInstruction(
      'Individual die modifier. Value adjustment on this die. Click to adjust.',
    );
  }

  function renderActiveDice() {
    const size =
      activeDice.length > 6
        ? 'small'
        : activeDice.length > 4
        ? 'medium'
        : 'large';
    return activeDice.map((activeDie: iDie, index: number) => (
      <View key={`activeDie${index}`} style={styles.dieContainer}>
        <Die
          {...activeDie}
          instructionMode={instructionMode}
          setModifierInstructions={setSingleDieModifierInstructions}
          updateActiveDieModifier={updateActiveDieModifier}
          size={size}
          index={index}
          onClick={instructionMode ? clickActiveDieInstructions : undefined}
          onDoubleClick={instructionMode ? undefined : removeActiveDie}
          onLongPress={instructionMode ? undefined : toggleLockActiveDie}
          setOutsideTargetFunc={setOutsideTargetFunc}
          outsideTarget={outsideTarget}
        />
      </View>
    ));
  }

  function updateActiveDieModifier(index: number, modifierValue: number) {
    const activeDiceCopy = [...activeDice];
    activeDiceCopy[index].modifier = modifierValue;
    setActiveDice(activeDiceCopy);
  }

  let lastCalledTime = 0;

  const debounce = (func: () => void) => {
    const now = new Date().getTime();
    if (now - lastCalledTime > 100) {
      func();
      lastCalledTime = now;
    }
  };

  function debouncedReRollUnlockedWithVibration() {
    Vibration.vibrate([0]);
    debounce(reRollUnlocked);
  }

  const unlockedDieCount = activeDice.reduce((accumulator, die) => {
    return die.locked ? accumulator : accumulator + 1;
  }, 0);

  function reRollUnlocked() {
    if (context.sound !== eSounds.MUTE) {
      if (!unlockedDieCount) {
        playSound(eSounds.ERROR);
      } else {
        playSound(context.sound);
      }
    }
    setActiveDice(
      activeDice.map((die: iDie) => {
        if (!die.locked) {
          const newDieValue = Math.ceil(Math.random() * die.type);
          die.currentValue =
            die.currentValue === newDieValue
              ? newDieValue + 0.001 //forces rerender even if rolls the same value
              : newDieValue;
        }
        return die;
      }),
    );
  }

  function getTotal() {
    const reducer = (accumulator: number, currentDie: iDie) =>
      accumulator +
      (currentDie.currentValue || 0) +
      (context.showModifers ? currentDie.modifier || 0 : 0);
    return (
      activeDice.reduce(reducer, 0) + (context.showModifers ? modifier : 0)
    );
  }

  function clearAllDice() {
    setActiveDice([]);
  }

  const addActiveDie = (sound: eSounds) => (newDie: iDie) => {
    playSound(sound);
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
    <AppConsumer>
      {appConsumer => (
        <>
          <View
            style={[
              styles.scrollViewWrapper,
              {
                backgroundColor: appConsumer.palette.light,
              },
            ]}>
            <ScrollView
              // @ts-ignore
              ref={ref => (this.scrollView = ref)}
              onContentSizeChange={() => {
                // @ts-ignore
                this.scrollView.scrollToEnd({animated: true});
              }}>
              <View
                style={[
                  styles.scrollView,
                  activeDice.length < 2 && styles.center,
                ]}>
                {renderActiveDice()}
              </View>
            </ScrollView>

            <View
              style={[
                styles.bottomScrollShadow,
                {
                  shadowColor: appConsumer.palette.light,
                },
              ]}
            />
          </View>
          <ButtonBar
            showModifiers={appConsumer.showModifers}
            instructionMode={instructionMode}
            setCurrentInstruction={setCurrentInstruction}
            setShowingInstructions={setInstructionMode}
            reRollUnlocked={
              instructionMode ? reRollUnlockedInstructions : reRollUnlocked
            }
            clearAllDice={
              instructionMode ? clearAllDiceInstructions : clearAllDice
            }
            setModifier={setModifier}
            modifier={modifier}
            getTotal={getTotal}
            hasDice={!!activeDice.length}
            hasUnlockedDice={!!unlockedDieCount}
          />
          <DiceBar
            instructionMode={instructionMode}
            setCurrentInstruction={setCurrentInstruction}
            onDieClick={
              instructionMode
                ? addActiveDieInstructions
                : addActiveDie(appConsumer.sound)
            }
            setOutsideTargetFunc={setOutsideTargetFunc}
            outsideTarget={outsideTarget}
          />
        </>
      )}
    </AppConsumer>
  );
};

const styles = StyleSheet.create({
  scrollViewWrapper: {
    flex: 1,
  },
  scrollView: {
    padding: 10,
    paddingRight: 15,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-between',
  },
  center: {
    justifyContent: 'center',
  },
  bottomScrollShadow: {
    height: 10,
  },
  dieContainer: {
    alignItems: 'center',
  },
});

export default DiceView;
