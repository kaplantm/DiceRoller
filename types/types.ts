export enum eDice {
  TWENTY = 20,
  TWELVE = 12,
  TEN = 10,
  EIGHT = 8,
  SIX = 6,
  FOUR = 4,
}

export interface iDie {
  type: eDice;
  currentValue?: number;
  locked: boolean;
  onClick?: any;
  onDoubleClick?: any;
  onLongPress?: any;
  index?: number;
  size?: size;
  opacity?: number;
  showLabel?: boolean;
  modifier?: number;
}

export type size =
  | 'small_x1'
  | 'medium_x1'
  | 'large_x1'
  | 'small_x2'
  | 'medium_x2'
  | 'large_x2';
