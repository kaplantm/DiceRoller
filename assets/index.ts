import {eDice} from '../types/types';
import D4 from './svgs/D4';
import D6 from './svgs/D6';
import D8 from './svgs/D8';
import D10 from './svgs/D10';
import D12 from './svgs/D12';
import D20 from './svgs/D20';

// TODO: multiple exports
export const Assets = {
  svgComponents: {
    [eDice.FOUR]: D4,
    [eDice.SIX]: D6,
    [eDice.EIGHT]: D8,
    [eDice.TEN]: D10,
    [eDice.TWELVE]: D12,
    [eDice.TWENTY]: D20,
  },
};
