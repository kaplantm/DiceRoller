import React from 'react';
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
      <Button onPress={subtractOneFromModifier}>
        <Icon name="remove" size={30} color={Colors.blue.main} />
      </Button>
      <ValueDisplay value={modifier} useSignedValue={true} label="MODIFIER: " />
      <Button onPress={addOneToModifier}>
        <Icon name="add" size={30} color={Colors.blue.main} />
      </Button>
      <Button onPress={toggleEditModifier}>
        <Icon name="check" size={30} color={Colors.blue.main} />
      </Button>
    </>
  );
};

export default ButtonBarEditModifier;
