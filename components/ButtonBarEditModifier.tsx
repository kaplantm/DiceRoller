import React from 'react';
import Button from './Button';
import ValueDisplay from './ValueDisplay';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {AppConsumer} from './ThemeProvider';

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

  function renderButtonBarEditModifier(palette: any) {
    return (
      <>
        <Button onPress={subtractOneFromModifier}>
          <Icon name="remove" size={30} color={palette.dark} />
        </Button>
        <ValueDisplay
          value={modifier}
          useSignedValue={true}
          label="MODIFIER: "
        />
        <Button onPress={addOneToModifier}>
          <Icon name="add" size={30} color={palette.dark} />
        </Button>
        <Button onPress={toggleEditModifier}>
          <Icon name="check" size={30} color={palette.dark} />
        </Button>
      </>
    );
  }

  function renderInDieEditModifier(palette: any) {
    return (
      <>
        <Button onPress={subtractOneFromModifier}>
          <Icon name="remove" size={30} color={palette.dark} />
        </Button>
        <Button onPress={addOneToModifier}>
          <Icon name="add" size={30} color={palette.dark} />
        </Button>
      </>
    );
  }

  return (
    <AppConsumer>
      {appConsumer => (
        <>
          {inDie
            ? renderInDieEditModifier(appConsumer.palette)
            : renderButtonBarEditModifier(appConsumer.palette)}
        </>
      )}
    </AppConsumer>
  );
};

export default ButtonBarEditModifier;
