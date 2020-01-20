import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Colors from '../theme/colors';
import globalStyles from '../theme/globalStyle';

const ValueDisplay = ({
  label,
  value,
  useSignedValue = false,
}: {
  label?: string;
  value: number;
  useSignedValue?: boolean;
}) => {
  const signedValue = value >= 0 ? `+ ${value}` : `- ${Math.abs(value)}`;

  return (
    <View
      style={[
        globalStyles.topShadow,
        styles.valueContainer,
        styles.marginTwenty,
      ]}>
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
    borderRadius: 5,
    backgroundColor: Colors.lighter,
    flexDirection: 'row',
    flex: 1,
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
    color: Colors.red,
  },
  marginTwenty: {
    margin: 20,
  },
});

export default ValueDisplay;
