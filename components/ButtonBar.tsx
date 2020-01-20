import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Colors from '../theme/colors';
import ButtonBarButtons from './ButtonBarButtons';
import ButtonBarEditModifier from './ButtonBarEditModifier';

const ButtonBar = ({
  reRollUnlocked,
  clearAllDice,
  setModifier,
  modifier,
  getTotal,
}: {
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
        <ButtonBarButtons
          setEditModifier={setEditModifier}
          editModifier={editModifier}
          reRollUnlocked={reRollUnlocked}
          clearAllDice={clearAllDice}
          modifier={modifier}
          getTotal={getTotal}
        />
      ) : (
        <ButtonBarEditModifier
          setEditModifier={setEditModifier}
          editModifier={editModifier}
          setModifier={setModifier}
          modifier={modifier}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonBar: {
    height: 70,
    borderBottomColor: Colors.light,
    borderBottomWidth: 2,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
});

export default ButtonBar;
