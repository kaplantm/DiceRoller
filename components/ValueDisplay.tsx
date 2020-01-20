import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Colors from '../theme/colors';
import globalStyles from '../theme/globalStyle';

const ValueDisplay = ({
  label,
  value,
  useSignedValue = false,
  onPress,
}: {
  label?: string;
  value: number;
  useSignedValue?: boolean;
  onPress?: any;
}) => {
  const signedValue = value >= 0 ? `+ ${value}` : `- ${Math.abs(value)}`;

  return (
    <View
      onTouchEnd={onPress}
      style={[globalStyles.topShadow, styles.valueContainer]}>
      <View style={[globalStyles.bottomShadow, styles.valueInner]}>
        {label && <Text style={[styles.label]}>{label}</Text>}
        <View style={[styles.value]}>
          <Text style={styles.text}>
            {useSignedValue ? signedValue : value}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  valueContainer: {
    height: 30,
    borderRadius: 5,
    backgroundColor: Colors.lighter,
    flexDirection: 'row',
    flex: 1,
    maxWidth: 150,
  },
  valueInner: {
    backgroundColor: Colors.lighter,
    borderRadius: 5,
    flex: 1,
    padding: 3,
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  label: {
    opacity: 0.5,
  },
  value: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: '600',
    fontSize: 20,
    color: Colors.blue.main,
  },
});

export default ValueDisplay;
