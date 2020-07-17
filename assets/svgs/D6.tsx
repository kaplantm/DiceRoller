import React from 'react';
import {Svg, Rect} from 'react-native-svg';
import {getRandomShade} from '../../shared/helpers';
import {AppConsumer} from '../../components/ThemeProvider';

const D6 = ({rolling = false}: {rolling: boolean}) => {
  return (
    <AppConsumer>
      {appConsumer => (
        <Svg height="80%" width="80%" viewBox="0 0 120 120">
          <Rect
            height="100%"
            width="100%"
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

export default D6;
