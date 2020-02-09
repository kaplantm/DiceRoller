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
  inDie = false,
}: {
  setModifier: any;
  modifier: number;
  setEditModifier: any;
  editModifier: boolean;
  inDie?: boolean;
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

  function renderButtonBarEditModifier() {
    return (
      <>
        <Button onPress={subtractOneFromModifier}>
          <Icon name="remove" size={30} color={Colors.blue.main} />
        </Button>
        <ValueDisplay
          value={modifier}
          useSignedValue={true}
          label="MODIFIER: "
        />
        <Button onPress={addOneToModifier}>
          <Icon name="add" size={30} color={Colors.blue.main} />
        </Button>
        <Button onPress={toggleEditModifier}>
          <Icon name="check" size={30} color={Colors.blue.main} />
        </Button>
      </>
    );
  }

  function renderInDieEditModifier() {
    return (
      <>
        <Button onPress={subtractOneFromModifier}>
          <Icon name="remove" size={30} color={Colors.blue.main} />
        </Button>
        <Button onPress={addOneToModifier}>
          <Icon name="add" size={30} color={Colors.blue.main} />
        </Button>
      </>
    );
  }

  return (
    <>{inDie ? renderInDieEditModifier() : renderButtonBarEditModifier()}</>
  );
};

export default ButtonBarEditModifier;
