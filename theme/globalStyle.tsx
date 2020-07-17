import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
  bottomShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.62,

    elevation: 4,
  },
  topShadow: {
    shadowColor: '#FFF',
    shadowOffset: {
      width: -4,
      height: -4,
    },
    shadowOpacity: 0.7,
    shadowRadius: 2.62,
    elevation: 4,
  },
});

export default globalStyles;
