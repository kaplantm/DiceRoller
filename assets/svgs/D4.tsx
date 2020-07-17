import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {getRandomShade} from '../../shared/helpers';
import {AppConsumer} from '../../components/ThemeProvider';

const D4 = ({rolling = false}: {rolling: boolean}) => {
  return (
    <AppConsumer>
      {appConsumer => (
        <Svg height="100%" width="100%" viewBox="0 0 197.773 171.276">
          <Path
            d="M0,171.276 L98.887,0 L197.773,171.276 z"
            fill={
              rolling
                ? getRandomShade(appConsumer.palette.colorSet)
                : appConsumer.palette.colorSet.main
            }
          />
        </Svg>
      )}
    </AppConsumer>
  );
};

export default D4;
