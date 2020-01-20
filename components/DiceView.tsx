import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import Colors from '../theme/colors';
import DiceBar from '../components/DiceBar';
import Die from '../components/Die';
import {iDie} from '../types/types';
import ButtonBar from '../components/ButtonBar';
import globalStyles from '../theme/globalStyle';

const DiceView = ({
  activeDice,
  setActiveDice,
  modifier,
  setModifier,
  setInstructionMode,
  instructionMode,
  setCurrentInstruction,
}: {
  activeDice: iDie[];
  setActiveDice: any;
  modifier: number;
  setModifier: any;
  setInstructionMode: any;
  instructionMode: boolean;
  setCurrentInstruction: any;
}) => {
  function addActiveDieInstructions() {
    setCurrentInstruction('Dice menu. Click to roll a new dice.');
  }
  function reRollUnlockedInstructions() {
    setCurrentInstruction(
      'Rerolls all unlocked dice. Press and hold on any rolled die to toggle die lock.',
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

  function renderActiveDice() {
    const size =
      activeDice.length > 10
        ? 'small'
        : activeDice.length > 5
        ? 'medium'
        : 'large';
    return activeDice.map((activeDie: iDie, index: number) => (
      <Die
        {...activeDie}
        size={size}
        index={index}
        onClick={instructionMode ? clickActiveDieInstructions : undefined}
        onDoubleClick={instructionMode ? undefined : removeActiveDie}
        onLongPress={instructionMode ? undefined : toggleLockActiveDie}
        key={`activeDie${index}`}
      />
    ));
  }

  function reRollUnlocked() {
    setActiveDice(
      activeDice.map((die: iDie) => {
        if (!die.locked) {
          die.currentValue = Math.ceil(Math.random() * die.type);
        }
        return die;
      }),
    );
  }

  function getTotal() {
    const reducer = (accumulator: number, currentDie: iDie) =>
      accumulator + (currentDie.currentValue || 0);
    return activeDice.reduce(reducer, 0) + modifier;
  }

  function clearAllDice() {
    setActiveDice([]);
  }

  const addActiveDie = (newDie: iDie) => {
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
    <>
      <View style={styles.scrollViewWrapper}>
        <ScrollView
          // @ts-ignore
          ref={ref => (this.scrollView = ref)}
          onContentSizeChange={() => {
            // @ts-ignore
            this.scrollView.scrollToEnd({animated: true});
          }}>
          <View style={styles.scrollView}>{renderActiveDice()}</View>
        </ScrollView>

        <View style={[globalStyles.topShadow, styles.bottomScrollShadow]} />
      </View>
      <ButtonBar
        instructionMode={instructionMode}
        setCurrentInstruction={setCurrentInstruction}
        setShowingInstructions={setInstructionMode}
        reRollUnlocked={
          instructionMode ? reRollUnlockedInstructions : reRollUnlocked
        }
        clearAllDice={instructionMode ? clearAllDiceInstructions : clearAllDice}
        setModifier={setModifier}
        modifier={modifier}
        getTotal={getTotal}
      />
      <DiceBar
        onDieClick={instructionMode ? addActiveDieInstructions : addActiveDie}
      />
    </>
  );
};

const styles = StyleSheet.create({
  scrollViewWrapper: {
    flex: 1,
    backgroundColor: Colors.light,
  },
  scrollView: {
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  bottomScrollShadow: {
    shadowColor: Colors.light,
    height: 10,
  },
});

export default DiceView;
