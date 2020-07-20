import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {AppConsumer} from './ThemeProvider';

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
    <AppConsumer>
      {appConsumer => (
        <View
          onTouchEnd={onPress}
          style={[
            styles.valueContainer,
            {
              backgroundColor: appConsumer.palette.lighter,
            },
          ]}>
          <View
            style={[
              styles.valueInner,
              {
                backgroundColor: appConsumer.palette.lighter,
              },
            ]}>
            {label && (
              <Text style={[styles.label, {color: appConsumer.palette.darker}]}>
                {label}
              </Text>
            )}
            <View style={[styles.value]}>
              <Text
                style={[
                  styles.text,
                  {
                    color: appConsumer.palette.dark,
                  },
                ]}>
                {useSignedValue ? signedValue : value}
              </Text>
            </View>
          </View>
        </View>
      )}
    </AppConsumer>
  );
};

const styles = StyleSheet.create({
  valueContainer: {
    height: 30,
    borderRadius: 5,
    flexDirection: 'row',
    flex: 1,
    maxWidth: 150,
  },
  valueInner: {
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
  },
});

export default ValueDisplay;
