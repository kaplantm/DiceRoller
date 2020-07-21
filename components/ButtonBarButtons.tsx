import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Button from './Button';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ValueDisplay from './ValueDisplay';
import {AppConsumer} from './ThemeProvider';

const ClearButton = ({hasDice, color}: {hasDice: boolean; color: string}) => {
  return (
    <Icon
      name="clear"
      size={30}
      color={color}
      style={!hasDice && styles.transparent}
    />
  );
};

const RerollButton = ({
  hasUnlockedDice,
  color,
}: {
  hasUnlockedDice: boolean;
  color: string;
}) => {
  return (
    <Icon
      name="refresh"
      size={30}
      color={color}
      style={!hasUnlockedDice && styles.transparent}
    />
  );
};

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
  hasDice,
  hasUnlockedDice,
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
  hasDice: boolean;
  hasUnlockedDice: boolean;
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
    <AppConsumer>
      {appConsumer => (
        <>
          <Button onPress={toggleInstructions}>
            <Icon
              name="help-outline"
              size={30}
              color={appConsumer.palette.dark}
            />
          </Button>
          {hasUnlockedDice ? (
            <Button onPress={clearAllDice}>
              <RerollButton
                color={appConsumer.palette.dark}
                hasUnlockedDice={hasUnlockedDice}
              />
            </Button>
          ) : (
            <RerollButton
              color={appConsumer.palette.dark}
              hasUnlockedDice={hasUnlockedDice}
            />
          )}
          <ValueDisplay
            onPress={instructionMode ? totalInstructions : undefined}
            value={Math.floor(getTotal())}
            label="TOTAL: "
          />

          {appConsumer.showModifers && (
            <Button
              onPress={
                instructionMode
                  ? toggleEditModifierInstructions
                  : toggleEditModifier
              }>
              <View style={[styles.modifier]}>
                <Text
                  style={[
                    styles.text,
                    {
                      color: appConsumer.palette.dark,
                    },
                  ]}>
                  {modifierDisplay}
                </Text>
              </View>
            </Button>
          )}
          {hasDice ? (
            <Button onPress={clearAllDice}>
              <ClearButton color={appConsumer.palette.dark} hasDice={hasDice} />
            </Button>
          ) : (
            <ClearButton color={appConsumer.palette.dark} hasDice={hasDice} />
          )}
        </>
      )}
    </AppConsumer>
  );
};

const styles = StyleSheet.create({
  modifier: {
    borderRadius: 5,
    padding: 3,
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  transparent: {
    opacity: 0.25,
  },
  text: {
    fontWeight: '600',
    fontSize: 20,
  },
  marginRightTen: {
    marginRight: 10,
  },
});

export default ButtonBarButtons;
