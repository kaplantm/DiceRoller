import React from 'react';
import {StyleSheet, View} from 'react-native';
import Die from './Die';
import {DICE_TYPES} from '../constants/constants';
import globalStyles from '../theme/globalStyle';
import {AppConsumer} from './ThemeProvider';

const DiceBar = ({
  onDieClick,
  instructionMode,
  setCurrentInstruction,
  setOutsideTargetFunc,
  outsideTarget,
}: {
  onDieClick: any;
  instructionMode: boolean;
  setCurrentInstruction: any;
  setOutsideTargetFunc: any;
  outsideTarget: boolean;
}) => {
  function setModifierInstructions() {
    setCurrentInstruction(
      'Die roll modifier. Value adjustment made to each roll of this die. Click to adjust.',
    );
  }

  function renderOneOfEachDice() {
    return DICE_TYPES.map(type => (
      <View style={styles.dieContainer} key={type}>
        <Die
          instructionMode={instructionMode}
          setModifierInstructions={setModifierInstructions}
          type={type}
          locked={true}
          currentValue={type}
          onClick={onDieClick}
          opacity={1}
          showLabel={true}
          setOutsideTargetFunc={setOutsideTargetFunc}
          outsideTarget={outsideTarget}
        />
      </View>
    ));
  }
  return (
    <AppConsumer>
      {appConsumer => (
        <View style={[!appConsumer.isDarkTheme && globalStyles.topShadow]}>
          <View
            style={[
              !appConsumer.isDarkTheme && globalStyles.bottomShadow,
              styles.staticDiceContainer,
              {
                backgroundColor: appConsumer.palette.mediumLight,
              },
            ]}>
            {renderOneOfEachDice()}
          </View>
        </View>
      )}
    </AppConsumer>
  );
};

const styles = StyleSheet.create({
  staticDiceContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dieContainer: {
    alignItems: 'center',
    flex: 1,
    flexBasis: '33%',
    flexGrow: 1,
  },
});

export default DiceBar;
