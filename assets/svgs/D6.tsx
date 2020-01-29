import React from 'react';
import {Svg, Rect} from 'react-native-svg';
import Colors from '../../theme/colors';
import {getRandomShade} from '../../shared/helpers';

const D6 = ({rolling = false}: {rolling: boolean}) => {
  return (
    <Svg height="80%" width="80%" viewBox="0 0 120 120">
      <Rect
        height="100%"
        width="100%"
        fill={rolling ? getRandomShade() : Colors.blue.main}
      />
    </Svg>
  );
};

export default D6;
