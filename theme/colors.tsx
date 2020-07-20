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

export const blueGroup: IColorGroup = {
  lighter: 'hsla(200, 55%, 57%, 1)',
  light: 'hsla(200, 66%, 47%, 1)',
  main: 'hsla(200, 69%, 42%, 1)',
  medium: 'hsla(200, 72%, 38%, 1)',
  mediumDarker: 'hsla(200, 80%, 35%, 1)',
  mediumDark: 'hsla(200, 79%, 31%, 1)',
  darkest: 'hsla(200, 79%, 28%, 1)',
};

export const purpleGroup: IColorGroup = {
  lighter: 'hsla(250, 40%, 61%, 1)',
  light: 'hsla(250, 51%, 52%, 1)',
  main: 'hsla(250, 52%, 46%, 1)',
  medium: 'hsla(250, 59%, 42%, 1)',
  mediumDarker: 'hsla(250, 57%, 39%, 1)',
  mediumDark: 'hsla(250, 50%, 34%, 1)',
  darkest: 'hsla(250, 50%, 32%, 1)',
};

export const blueGreyGroup: IColorGroup = {
  lighter: 'hsla(200, 5%, 57%, 1)',
  light: 'hsla(200, 16%, 47%, 1)',
  main: 'hsla(200, 19%, 42%, 1)',
  medium: 'hsla(200, 12%, 38%, 1)',
  mediumDarker: 'hsla(200, 20%, 35%, 1)',
  mediumDark: 'hsla(200, 19%, 31%, 1)',
  darkest: 'hsla(200, 29%, 28%, 1)',
};

export const redGroup: IColorGroup = {
  lighter: 'hsla(0, 55%, 67%, 1)',
  light: 'hsla(350, 66%, 47%, 1)',
  main: 'hsla(350, 69%, 42%, 1)',
  medium: 'hsla(350, 72%, 38%, 1)',
  mediumDarker: 'hsla(350, 80%, 35%, 1)',
  mediumDark: 'hsla(350, 79%, 31%, 1)',
  darkest: 'hsla(350, 79%, 28%, 1)',
};

export const greenGroup: IColorGroup = {
  lighter: 'hsla(100, 50%, 50%, 1)',
  light: 'hsla(100, 66%, 47%, 1)',
  main: 'hsla(100, 69%, 42%, 1)',
  medium: 'hsla(100, 72%, 38%, 1)',
  mediumDarker: 'hsla(100, 80%, 35%, 1)',
  mediumDark: 'hsla(100, 79%, 31%, 1)',
  darkest: 'hsla(100, 79%, 28%, 1)',
};

const sharedColors = {
  white: '#FFF',
  black: '#000',
  negModifier: 'hsla(0, 90%, 65%, 1)',
  posModifier: 'hsla(100, 50%, 50%, 1)',
  zeroModifier: 'hsla(200, 55%, 57%, 1)',
};

export enum EColorTheme {
  BLUE = 'blue',
  TEAL = 'teal',
  RED = 'red',
  GREEN = 'green',
  PURPLE = 'purple',
  GREY = 'grey',
  DARK = 'dark',
}

export interface ITheme {
  white: string;
  black: string;
  negModifier: string;
  posModifier: string;
  zeroModifier: string;
  darker: string;
  dark: string;
  mediumDark: string;
  medium: string;
  mediumLight: string;
  light: string;
  lighter: string;
  colorSet: IColorGroup;
}

export const colorThemes: {[key: string]: ITheme} = {
  [EColorTheme.BLUE]: {
    ...sharedColors,
    darker: 'hsla(211, 20%, 20%, 1)',
    dark: 'hsla(211, 80%, 29%, .8)',
    mediumDark: 'hsla(211, 80%, 39%, .6)',
    medium: 'hsla(207, 52%, 54%, 1)',
    mediumLight: 'hsla(207, 42%, 90%, 1)',
    light: 'hsla(207, 52%, 94%, 1)',
    lighter: 'hsla(207, 52%, 98%, 1)',
    colorSet: blueGroup,
  },
  [EColorTheme.PURPLE]: {
    ...sharedColors,
    darker: 'hsla(250, 15%, 20%, 1)',
    dark: 'hsla(250, 60%, 29%, .8)',
    mediumDark: 'hsla(250, 60%, 39%, .6)',
    medium: 'hsla(250, 43%, 54%, 1)',
    mediumLight: 'hsla(250, 35%, 90%, 1)',
    light: 'hsla(250,43%, 94%, 1)',
    lighter: 'hsla(250, 35%, 98%, 1)',
    colorSet: purpleGroup,
  },
  [EColorTheme.RED]: {
    ...sharedColors,
    darker: 'hsla(11, 20%, 20%, 1)',
    dark: 'hsla(350, 100%, 29%, .8)',
    mediumDark: 'hsla(350, 80%, 39%, .6)',
    medium: 'hsla(350, 52%, 54%, 1)',
    mediumLight: 'hsla(350, 10%, 90%, 1)',
    light: 'hsla(350, 15%, 96%, 1)',
    lighter: 'hsla(350, 52%, 99%, 1)',
    colorSet: redGroup,
  },
  [EColorTheme.GREEN]: {
    ...sharedColors,
    darker: 'hsla(100, 20%, 20%, 1)',
    dark: 'hsla(100, 80%, 29%, .8)',
    mediumDark: 'hsla(100, 80%, 39%, .6)',
    medium: 'hsla(100, 52%, 54%, 1)',
    mediumLight: 'hsla(100, 42%, 90%, 1)',
    light: 'hsla(100, 52%, 96%, 1)',
    lighter: 'hsla(100, 52%, 98%, 1)',
    colorSet: greenGroup,
  },
  [EColorTheme.GREY]: {
    ...sharedColors,
    negModifier: 'hsla(0, 40%, 65%, 1)',
    posModifier: 'hsla(100, 30%, 50%, 1)',
    zeroModifier: 'hsla(200, 27%, 57%, 1)',
    darker: 'hsla(211, 5%, 20%, 1)',
    dark: 'hsla(211, 20%, 29%, .8)',
    mediumDark: 'hsla(211, 20%, 39%, .6)',
    medium: 'hsla(207, 12%, 54%, 1)',
    mediumLight: 'hsla(207, 15%, 90%, 1)',
    light: 'hsla(207, 12%, 94%, 1)',
    lighter: 'hsla(207, 12%, 98%, 1)',
    colorSet: blueGreyGroup,
  },
  [EColorTheme.DARK]: {
    ...sharedColors,
    negModifier: 'hsla(0, 40%, 55%, 1)',
    posModifier: 'hsla(100, 30%, 40%, 1)',
    zeroModifier: 'hsla(200, 27%, 57%, 1)',
    darker: 'hsla(200, 66%, 80%, 1)',
    dark: 'hsla(200, 79%, 31%, 1)',
    mediumDark: 'hsla(200, 66%, 47%, 1)',
    medium: 'hsla(200, 66%, 47%, 1)',
    mediumLight: 'hsla(207, 42%, 15%, 1)',
    light: 'hsla(207, 52%, 10%, 1)',
    lighter: 'hsla(207, 52%, 0%, 1)',
    colorSet: blueGroup,
  },
};

export const colorThemesArray = [
  EColorTheme.BLUE,
  EColorTheme.PURPLE,
  EColorTheme.RED,
  EColorTheme.GREEN,
  EColorTheme.GREY,
  EColorTheme.DARK,
];

export function getColors(theme: EColorTheme = EColorTheme.BLUE): ITheme {
  return colorThemes[theme];
}
