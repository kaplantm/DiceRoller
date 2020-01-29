export enum EColorShade {
  LIGHTER = 'lighter',
  LIGHT = 'light',
  MAIN = 'main',
  MEDIUM = 'medium',
  MEDIUMDARKER = 'mediumDarker',
  MEDIUMDARK = 'mediumDark',
  DARKEST = 'darkest',
}

export const shadeKeys = Object.keys(EColorShade);
export const shadeKeysLength = shadeKeys.length;

interface IColorGroup {
  [EColorShade.LIGHTER]: string;
  [EColorShade.LIGHT]: string;
  [EColorShade.MAIN]: string;
  [EColorShade.MEDIUM]: string;
  [EColorShade.MEDIUMDARK]: string;
  [EColorShade.MEDIUMDARKER]: string;
  [EColorShade.DARKEST]: string;
}

export const blueGroup = {
  lighter: 'hsla(200, 55%, 57%, 1)',
  light: 'hsla(200, 66%, 47%, 1)',
  main: 'hsla(200, 69%, 42%, 1)',
  medium: 'hsla(200, 72%, 38%, 1)',
  mediumDarker: 'hsla(200, 80%, 35%, 1)',
  mediumDark: 'hsla(200, 79%, 31%, 1)',
  darkest: 'hsla(200, 79%, 28%, 1)',
};

export const blueGreyGroup = {
  lighter: 'hsla(200, 5%, 57%, 1)',
  light: 'hsla(200, 16%, 47%, 1)',
  main: 'hsla(200, 19%, 42%, 1)',
  medium: 'hsla(200, 12%, 38%, 1)',
  mediumDarker: 'hsla(200, 20%, 35%, 1)',
  mediumDark: 'hsla(200, 19%, 31%, 1)',
  darkest: 'hsla(200, 29%, 28%, 1)',
};

export const redGroup = {
  lighter: 'hsla(0, 55%, 67%, 1)',
  light: 'hsla(0, 66%, 47%, 1)',
  main: 'hsla(0, 69%, 42%, 1)',
  medium: 'hsla(0, 72%, 38%, 1)',
  mediumDarker: 'hsla(0, 80%, 35%, 1)',
  mediumDark: 'hsla(0, 79%, 31%, 1)',
  darkest: 'hsla(0, 79%, 28%, 1)',
};

export const greenGroup = {
  lighter: 'hsla(100, 50%, 50%, 1)',
  light: 'hsla(100, 66%, 47%, 1)',
  main: 'hsla(100, 69%, 42%, 1)',
  medium: 'hsla(100, 72%, 38%, 1)',
  mediumDarker: 'hsla(100, 80%, 35%, 1)',
  mediumDark: 'hsla(100, 79%, 31%, 1)',
  darkest: 'hsla(100, 79%, 28%, 1)',
};

const Colors = {
  black: '#000',
  darker: 'hsla(211, 20%, 20%, 1)',
  dark: 'hsla(211, 80%, 29%, .8)',
  mediumDark: 'hsla(211, 80%, 39%, .6)',
  medium: 'hsla(207, 52%, 54%, 1)',
  mediumLight: 'hsla(207, 42%, 90%, 1)',
  light: 'hsla(207, 52%, 94%, 1)',
  lighter: 'hsla(207, 52%, 98%, 1)',
  negModifier: 'hsla(0, 90%, 65%, 1)',
  posModifier: 'hsla(100, 50%, 50%, 1)',
  zeroModifier: 'hsla(200, 55%, 57%, 1)',
  red: redGroup,
  blue: blueGroup,
  green: greenGroup,
  white: '#FFF',
};

export default Colors;
