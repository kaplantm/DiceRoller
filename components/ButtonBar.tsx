import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Colors from '../theme/colors';
import Button from './Button';
import Icon from 'react-native-vector-icons/MaterialIcons';
import globalStyles from '../theme/globalStyle';

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
  const modifierDisplay =
    modifier >= 0 ? `+ ${modifier}` : `- ${Math.abs(modifier)}`;

  function toggleEditModifier() {
    setEditModifier(!editModifier);
  }

  function subtractOneFromModifier() {
    setModifier(modifier - 1);
  }

  function addOneToModifier() {
    setModifier(modifier + 1);
  }

  function renderButtons() {
    return (
      <>
        <Button onPress={reRollUnlocked} style={styles.marginTwenty}>
          <Icon name="refresh" size={30} color="#900" />
        </Button>
        <View
          style={[globalStyles.topShadow, styles.total, styles.marginTwenty]}>
          <View style={[globalStyles.bottomShadow, styles.totalInner]}>
            <Text style={styles.text}>{getTotal()}</Text>
          </View>
        </View>
        <Button onPress={toggleEditModifier} style={[styles.marginTwenty]}>
          <View style={styles.modifier}>
            <Text style={styles.text}>{modifierDisplay}</Text>
          </View>
        </Button>
        <Button onPress={clearAllDice} style={styles.marginTwenty}>
          <Icon name="clear" size={30} color="#900" />
        </Button>
      </>
    );
  }

  function renderEditModifier() {
    return (
      <>
        <Button onPress={subtractOneFromModifier} style={styles.marginTwenty}>
          <Icon name="remove" size={30} color="#900" />
        </Button>

        <View
          style={[globalStyles.topShadow, styles.total, styles.marginTwenty]}>
          <View
            style={[
              globalStyles.bottomShadow,
              styles.totalInner,
              styles.modifier,
            ]}>
            <Text style={[styles.text, styles.modifierLabel]}>Mod. </Text>
            <View style={[styles.modifierValue]}>
              <Text style={styles.text}>{modifierDisplay}</Text>
            </View>
          </View>
        </View>
        <Button onPress={addOneToModifier} style={styles.marginTwenty}>
          <Icon name="add" size={30} color="#900" />
        </Button>
        <Button onPress={toggleEditModifier} style={styles.marginTwenty}>
          <Icon name="check" size={30} color="#900" />
        </Button>
      </>
    );
  }

  return (
    <View style={styles.buttonBar}>
      {editModifier ? renderEditModifier() : renderButtons()}
    </View>
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
  modifierLabel: {
    opacity: 0.5,
    // paddingRight: 10,
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
  buttonBar: {
    borderBottomColor: Colors.light,
    borderBottomWidth: 2,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
});

export default ButtonBar;
