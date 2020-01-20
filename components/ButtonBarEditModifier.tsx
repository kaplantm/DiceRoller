import React from 'react';
import {StyleSheet} from 'react-native';
import Colors from '../theme/colors';
import Button from './Button';
import ValueDisplay from './ValueDisplay';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ButtonBarEditModifier = ({
  setModifier,
  modifier,
  setEditModifier,
  editModifier,
}: {
  setModifier: any;
  modifier: number;
  setEditModifier: any;
  editModifier: boolean;
}) => {
  function toggleEditModifier() {
    setEditModifier(!editModifier);
  }

  function subtractOneFromModifier() {
    setModifier(modifier - 1);
  }

  function addOneToModifier() {
    setModifier(modifier + 1);
  }

  return (
    <>
      <Button onPress={subtractOneFromModifier} style={styles.marginTwenty}>
        <Icon name="remove" size={30} color={Colors.red} />
      </Button>
      <ValueDisplay value={modifier} useSignedValue={true} label="Modifier: " />
      <Button onPress={addOneToModifier} style={styles.marginTwenty}>
        <Icon name="add" size={30} color={Colors.red} />
      </Button>
      <Button onPress={toggleEditModifier} style={styles.marginTwenty}>
        <Icon name="check" size={30} color={Colors.red} />
      </Button>
    </>
  );
};

const styles = StyleSheet.create({
  modifierContainer: {
    borderRadius: 5,
    backgroundColor: Colors.lighter,
    flexDirection: 'row',
    flex: 1,
  },
  modifier: {
    backgroundColor: Colors.lighter,
    borderRadius: 5,
    flex: 1,
    padding: 3,
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  modifierLabel: {
    opacity: 0.5,
  },
  modifierValue: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: '600',
    fontSize: 20,
    color: Colors.red,
  },
  marginTwenty: {
    margin: 20,
  },
});

export default ButtonBarEditModifier;
