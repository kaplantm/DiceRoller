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
  size?: 'small' | 'medium' | 'large';
  opacity?: number;
  showLabel?: boolean;
}
