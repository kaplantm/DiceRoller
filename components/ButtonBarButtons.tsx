import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Colors from '../theme/colors';
import Button from './Button';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ValueDisplay from './ValueDisplay';

const ButtonBarButtons = ({
  reRollUnlocked,
  clearAllDice,
  modifier,
  setEditModifier,
  editModifier,
  getTotal,
}: {
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
  return (
    <>
      <Button onPress={reRollUnlocked} style={styles.marginTwenty}>
        <Icon name="refresh" size={30} color={Colors.red} />
      </Button>
      <ValueDisplay value={getTotal()} label="Total: " />
      <Button onPress={toggleEditModifier} style={[styles.marginTwenty]}>
        <View style={styles.modifier}>
          <Text style={styles.text}>{modifierDisplay}</Text>
        </View>
      </Button>
      <Button onPress={clearAllDice} style={styles.marginTwenty}>
        <Icon name="clear" size={30} color={Colors.red} />
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
    color: Colors.red,
  },
  marginTwenty: {
    margin: 20,
  },
});

export default ButtonBarButtons;
