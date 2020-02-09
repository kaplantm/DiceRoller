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
  [eDice.FOUR]: {
    small_x1: {top: 8},
    medium_x1: {},
    large_x1: {top: 12},
    small_x2: {top: 8},
    medium_x2: {},
    large_x2: {top: 12},
  },
  [eDice.SIX]: {
    small_x1: {},
    medium_x1: {},
    large_x1: {},
    small_x2: {},
    medium_x2: {},
    large_x2: {},
  },
  [eDice.EIGHT]: {
    small_x1: {},
    medium_x1: {},
    large_x1: {},
    small_x2: {},
    medium_x2: {},
    large_x2: {},
  },
  [eDice.TEN]: {
    small_x1: {paddingTop: 18, top: 0, left: 1, justifyContent: 'flex-start'},
    medium_x1: {paddingTop: 23, top: 0, left: 1},
    large_x1: {paddingTop: 28, top: 0, left: 1},
    small_x2: {paddingTop: 48, top: 0, left: 1, justifyContent: 'flex-start'},
    medium_x2: {paddingTop: 58, top: 0, left: 1},
    large_x2: {paddingTop: 72, top: 0, left: 1},
  },
  [eDice.TWELVE]: {
    small_x1: {},
    medium_x1: {},
    large_x1: {},
    small_x2: {},
    medium_x2: {},
    large_x2: {},
  },
  [eDice.TWENTY]: {
    small_x1: {top: 2, left: 1},
    medium_x1: {},
    large_x1: {},
    small_x2: {top: 2, left: 1},
    medium_x2: {},
    large_x2: {},
  },
};
