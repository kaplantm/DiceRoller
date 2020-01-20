import React from 'react';
import {Svg, Path} from 'react-native-svg';
import Colors from '../../theme/colors';

const D4 = () => {
  return (
    <Svg height="100%" width="100%" viewBox="0 0 102 116.8">
      <Path d="M0,28.6 L48.3,0.7 L0,84.3 z" fill={Colors.blue.main} />
      <Path d="M0.8,87 L51,0 L101.2,87 z" fill={Colors.blue.medium} />
      <Path d="M53.7,0.7 L102,28.6 L102,84.3 z" fill={Colors.blue.mediumDark} />
      <Path d="M2.8,89 L99.2,89 L51,116.8 z" fill={Colors.blue.darkest} />
    </Svg>
  );
};

export default D4;
