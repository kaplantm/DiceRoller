import {eDice} from '../types/types';

export const DICE_TYPES = [
  eDice.FOUR,
  eDice.SIX,
  eDice.EIGHT,
  eDice.TEN,
  eDice.TWELVE,
  eDice.TWENTY,
];

export const textPositionMap = {
  [eDice.FOUR]: {small: {top: 8}, medium: {}, large: {top: 12}},
  [eDice.SIX]: {small: {}, medium: {}, large: {}},
  [eDice.EIGHT]: {small: {}, medium: {}, large: {}},
  [eDice.TEN]: {
    small: {paddingTop: 18, top: 0, left: 1, justifyContent: 'flex-start'},
    medium: {paddingTop: 23, top: 0, left: 1},
    large: {paddingTop: 28, top: 0, left: 1},
  },
  [eDice.TWELVE]: {small: {}, medium: {}, large: {}},
  [eDice.TWENTY]: {
    small: {top: 2, left: 1},
    medium: {},
    large: {},
  },
};
