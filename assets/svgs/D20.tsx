import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {getRandomShade} from '../../shared/helpers';
import {AppConsumer} from '../../components/ThemeProvider';

const D20 = ({rolling = false}: {rolling: boolean}) => {
  return (
    <AppConsumer>
      {appConsumer => (
        <Svg height="100%" width="100%" viewBox="0 0 102 116.6">
          <Path
            d="M0.5,29.2 L49.2,24.5 L20.8,73.6 z"
            fill={
              rolling
                ? getRandomShade(appConsumer.palette.colorSet)
                : appConsumer.palette.colorSet.main
            }
          />
          <Path
            d="M52,22.4 L52,0 L98.5,26.9 z"
            fill={
              rolling
                ? getRandomShade(appConsumer.palette.colorSet)
                : appConsumer.palette.colorSet.main
            }
          />
          <Path
            d="M22.4,74.8 L51,25.3 L79.6,74.8 z"
            fill={
              rolling
                ? getRandomShade(appConsumer.palette.colorSet)
                : appConsumer.palette.colorSet.main
            }
          />
          <Path
            d="M0,32.9 L19.4,75.4 L0,86.6 z"
            fill={
              rolling
                ? getRandomShade(appConsumer.palette.colorSet)
                : appConsumer.palette.colorSet.main
            }
          />
          <Path
            d="M52.8,24.5 L101.5,29.2 L81.2,73.6 z"
            fill={
              rolling
                ? getRandomShade(appConsumer.palette.colorSet)
                : appConsumer.palette.colorSet.mediumDark
            }
          />
          <Path
            d="M1,88.3 L20.4,77.1 L47.5,115.1 z"
            fill={
              rolling
                ? getRandomShade(appConsumer.palette.colorSet)
                : appConsumer.palette.colorSet.main
            }
          />
          <Path
            d="M82.6,75.4 L102,32.9 L102,86.6 z"
            fill={
              rolling
                ? getRandomShade(appConsumer.palette.colorSet)
                : appConsumer.palette.colorSet.main
            }
          />
          <Path
            d="M22.6,76.8 L79.4,76.8 L51,116.6 z"
            fill={
              rolling
                ? getRandomShade(appConsumer.palette.colorSet)
                : appConsumer.palette.colorSet.main
            }
          />
          <Path
            d="M81.6,77.1 L101,88.3 L54.5,115.1 z"
            fill={
              rolling
                ? getRandomShade(appConsumer.palette.colorSet)
                : appConsumer.palette.colorSet.main
            }
          />
          <Path
            d="M50,0 L50,22.4 L3.5,26.9 z"
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

export default D20;
