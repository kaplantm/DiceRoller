import React from 'react';
import {Svg, Path} from 'react-native-svg';
import Colors from '../../theme/colors';

const D4 = () => {
  return (
    <Svg height="100%" width="100%" viewBox="0 0 112.2 117.5">
      <Path
        d="M37.9,83.7 L26.6,49 L56.1,27.6 L85.6,49 L74.3,83.7 z"
        fill={Colors.blue.medium}
      />
      <Path
        d="M0,76.8 L0,41.4 L24.6,49.4 L36,84.5 L20.8,105.4 z"
        fill={Colors.blue.mediumDarker}
      />
      <Path
        d="M57.1,25.8 L57.1,0 L90.7,10.9 L111.5,39.5 L86.9,47.5 z"
        fill={Colors.blue.darkest}
      />
      <Path
        d="M22.5,106.6 L37.7,85.7 L74.5,85.7 L89.7,106.6 L56.1,117.5 z"
        fill={Colors.blue.darkest}
      />
      <Path
        d="M76.2,84.5 L87.6,49.4 L112.2,41.4 L112.2,76.8 L91.4,105.4 z"
        fill={Colors.blue.darkest}
      />
      <Path
        d="M0.7,39.5 L21.5,10.9 L55.1,0 L55.1,25.8 L25.3,47.5 z"
        fill={Colors.blue.light}
      />
    </Svg>
  );
};

export default D4;
