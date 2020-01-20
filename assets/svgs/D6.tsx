import React from 'react';
import {Svg, Rect} from 'react-native-svg';
import Colors from '../../theme/colors';

const D6 = () => {
  return (
    <Svg height="80%" width="80%" viewBox="0 0 120 120">
      <Rect height="100%" width="100%" fill={Colors.blue.main} />
    </Svg>
  );
};

export default D6;
