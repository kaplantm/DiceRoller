import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import globalStyles from '../theme/globalStyle';
import {AppConsumer} from './ThemeProvider';

const Button = ({
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
    <AppConsumer>
      {appConsumer => (
        <TouchableOpacity onPress={onPress} style={[style]}>
          <View
            style={[
              styles.buttonContainer,
              neumorphism &&
                !appConsumer.isDarkTheme && {
                  backgroundColor: appConsumer.palette.light,
                  ...globalStyles.topShadow,
                },
            ]}>
            <View
              style={[
                styles.buttonContainerShadow,
                neumorphism && !appConsumer.isDarkTheme
                  ? {
                      backgroundColor: appConsumer.palette.light,
                      ...globalStyles.bottomShadow,
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
