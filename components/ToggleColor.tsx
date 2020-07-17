import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import globalStyles from '../theme/globalStyle';

const ToggleColor = ({
  children,
  onPress,
  style = {},
  neumorphism = true,
}: {
  children: any;
  onPress?: any;
  style?: object;
  neumorphism?: boolean;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.touchableOpacity, style]}>
      <View
        style={[styles.buttonContainer, neumorphism && globalStyles.topShadow]}>
        <View
          style={[
            styles.buttonContainerShadow,
            neumorphism && globalStyles.bottomShadow,
          ]}>
          {children}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 5,
  },
  buttonContainerShadow: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  textStyle: {
    fontWeight: '800',
  },
});

export default ToggleColor;
