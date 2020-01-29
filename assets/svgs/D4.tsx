import React from 'react';
import {Svg, Path} from 'react-native-svg';
import Colors from '../../theme/colors';
import {getRandomShade} from '../../shared/helpers';

const D4 = ({rolling = false}: {rolling: boolean}) => {
  return (
    <Svg height="100%" width="100%" viewBox="0 0 197.773 171.276">
      <Path
        d="M0,171.276 L98.887,0 L197.773,171.276 z"
        fill={rolling ? getRandomShade() : Colors.blue.main}
      />
    </Svg>
  );
};

export default D4;
