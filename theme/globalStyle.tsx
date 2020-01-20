import {StyleSheet} from 'react-native';
import Colors from './colors';

const globalStyles = StyleSheet.create({
  bottomShadow: {
    backgroundColor: Colors.light,
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
    backgroundColor: Colors.light,
    shadowColor: '#FFF',
    shadowOffset: {
      width: -4,
      height: -4,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2.62,

    elevation: 4,
  },
});

export default globalStyles;
