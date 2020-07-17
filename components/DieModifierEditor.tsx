import React from 'react';
import {StyleSheet, View} from 'react-native';
import ButtonBarEditModifier from './ButtonBarEditModifier';

export default function DieModifierEditor({
  setModifier,
  modifier,
  setEditModifier,
  editModifier,
}: {
  setModifier: any;
  modifier: number;
  setEditModifier: any;
  editModifier: boolean;
}) {
  return (
    <View style={styles.modifierEditorContainer}>
      <ButtonBarEditModifier
        setModifier={setModifier}
        modifier={modifier}
        setEditModifier={setEditModifier}
        editModifier={editModifier}
        inDie={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modifierEditorContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    padding: 8,
    flexDirection: 'row',
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
