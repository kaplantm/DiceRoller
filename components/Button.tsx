import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {AppConsumer} from './ThemeProvider';

const Button = ({
  children,
  onPress,
  style = {},
}: {
  children: any;
  onPress?: any;
  style?: object;
}) => {
  return (
    <AppConsumer>
      {appConsumer => (
        <TouchableOpacity onPress={onPress} style={[style]}>
          <View
            style={[
              styles.buttonContainer,
              !appConsumer.isDarkTheme && {
                backgroundColor: appConsumer.palette.light,
              },
            ]}>
            <View
              style={[
                styles.buttonContainerShadow,
                !appConsumer.isDarkTheme
                  ? {
                      backgroundColor: appConsumer.palette.light,
                    }
                  : {backgroundColor: appConsumer.palette.lighter},
              ]}>
              {children}
            </View>
          </View>
        </TouchableOpacity>
      )}
    </AppConsumer>
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
});

export default Button;
