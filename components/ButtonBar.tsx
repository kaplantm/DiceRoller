import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Colors from '../theme/colors';
import ButtonBarButtons from './ButtonBarButtons';
import ButtonBarEditModifier from './ButtonBarEditModifier';

const ButtonBar = ({
  instructionMode,
  setCurrentInstruction,
  setShowingInstructions,
  reRollUnlocked,
  clearAllDice,
  setModifier,
  modifier,
  getTotal,
}: {
  instructionMode: boolean;
  setCurrentInstruction: any;
  setShowingInstructions: any;
  reRollUnlocked: any;
  clearAllDice: any;
  setModifier: any;
  modifier: number;
  getTotal: () => number;
}) => {
  const [editModifier, setEditModifier] = useState<boolean>(false);

  return (
    <View style={styles.buttonBar}>
      {editModifier ? (
        <ButtonBarEditModifier
          setEditModifier={setEditModifier}
          editModifier={editModifier}
          setModifier={setModifier}
          modifier={modifier}
        />
      ) : (
        <ButtonBarButtons
          setCurrentInstruction={setCurrentInstruction}
          instructionMode={instructionMode}
          setShowingInstructions={setShowingInstructions}
          setEditModifier={setEditModifier}
          editModifier={editModifier}
          reRollUnlocked={reRollUnlocked}
          clearAllDice={clearAllDice}
          modifier={modifier}
          getTotal={getTotal}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonBar: {
    marginTop: 10,
    marginRight: '5%',
    marginLeft: '5%',
    marginBottom: 20,
    borderBottomColor: Colors.light,
    borderBottomWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default ButtonBar;
