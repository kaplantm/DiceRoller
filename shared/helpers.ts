import {
  blueGreyGroup,
  shadeKeys,
  shadeKeysLength,
  EColorShade,
} from '../theme/colors';

export const doFunctionAtIntervalForTime = (
  func: any,
  intervalTime = 60,
  endTime = 300,
  callback: any,
) => {
  const startTime = new Date().getTime();
  const interval = setInterval(function() {
    const timeEllapsed = new Date().getTime() - startTime;
    if (timeEllapsed > endTime) {
      clearInterval(interval);
      callback && callback();
      return;
    }
    func(timeEllapsed);
  }, intervalTime);
};

// Function to generate random number in range (inclusive)
export function randomNumberInRange(
  min: number,
  max: number,
  rand = Math.random(),
) {
  return Math.floor(rand * (max + 1 - min) + min);
}

export function getRandomShade(colorSet: any) {
  const randomIndex: number = Math.floor(Math.random() * shadeKeysLength);
  const randomEnumKey: EColorShade = shadeKeys[randomIndex] as any;
  // @ts-ignore
  return colorSet[EColorShade[randomEnumKey]];
}
