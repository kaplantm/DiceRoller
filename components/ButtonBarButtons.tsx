import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Colors from '../theme/colors';
import Button from './Button';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ValueDisplay from './ValueDisplay';

const ButtonBarButtons = ({
  setCurrentInstruction,
  instructionMode,
  setShowingInstructions,
  reRollUnlocked,
  clearAllDice,
  modifier,
  setEditModifier,
  editModifier,
  getTotal,
}: {
  setCurrentInstruction: any;
  instructionMode: boolean;
  setShowingInstructions: any;
  reRollUnlocked: any;
  clearAllDice: any;
  modifier: number;
  setEditModifier: any;
  editModifier: boolean;
  getTotal: () => number;
}) => {
  const modifierDisplay =
    modifier >= 0 ? `+ ${modifier}` : `- ${Math.abs(modifier)}`;

  function toggleEditModifier() {
    setEditModifier(!editModifier);
  }

  function toggleEditModifierInstructions() {
    setCurrentInstruction(
      'Click to change your modifier value. Your modifier value is added to the sum of your dice to create the total.',
    );
  }

  function totalInstructions() {
    setCurrentInstruction('The sum of all your dice and your modifier.');
  }

  function toggleInstructions() {
    setCurrentInstruction('Click any element on screen to learn more.');
    setShowingInstructions(!instructionMode);
  }

  return (
    <>
      <Button onPress={toggleInstructions} neumorphism={false}>
        <Icon name="help-outline" size={30} color={Colors.dark} />
      </Button>
      <Button onPress={reRollUnlocked}>
        <Icon name="refresh" size={30} color={Colors.blue.main} />
      </Button>
      <ValueDisplay
        onPress={instructionMode ? totalInstructions : undefined}
        value={getTotal()}
        label="TOTAL: "
      />
      <Button
        onPress={
          instructionMode ? toggleEditModifierInstructions : toggleEditModifier
        }>
        <View style={styles.modifier}>
          <Text style={styles.text}>{modifierDisplay}</Text>
        </View>
      </Button>
      <Button onPress={clearAllDice}>
        <Icon name="clear" size={30} color={Colors.blue.main} />
      </Button>
    </>
  );
};

const styles = StyleSheet.create({
  total: {
    borderRadius: 5,
    backgroundColor: Colors.lighter,
    flexDirection: 'row',
    flex: 1,
  },
  totalInner: {
    backgroundColor: Colors.lighter,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modifier: {
    borderRadius: 5,
    padding: 3,
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    fontWeight: '600',
    fontSize: 20,
    color: Colors.blue.main,
  },

  marginRightTen: {
    marginRight: 10,
  },
});

export default ButtonBarButtons;
