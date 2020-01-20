import React from 'react';
import {Svg, Path} from 'react-native-svg';
import Colors from '../../theme/colors';

const D4 = () => {
  return (
    <Svg height="100%" width="100%" viewBox="0 0 117.2 116.2">
      <Path
        d="M20.4,38.2 L58.6,0 L96.8,38.2 L58.6,54.5 z"
        fill={Colors.blue.main}
      />
      <Path
        d="M0,58.6 L18.9,39.7 L57.6,56.2 L57.6,116.2 z"
        fill={Colors.blue.mediumDark}
      />
      <Path
        d="M59.6,56.2 L98.3,39.7 L117.2,58.6 L59.6,116.2 z"
        fill={Colors.blue.darkest}
      />
    </Svg>
  );
};

export default D4;
