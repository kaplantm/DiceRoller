export const doFunctionAtIntervalForTime = (
  func,
  intervalTime = 60,
  endTime = 300,
  callback,
) => {
  const startTime = new Date().getTime();
  const interval = setInterval(function() {
    if (new Date().getTime() - startTime > endTime) {
      clearInterval(interval);
      callback && callback();
      return;
    }
    func();
  }, intervalTime);
};

// Function to generate random number in range (inclusive)
export function randomNumberInRange(min, max, rand = Math.random()) {
  return Math.floor(rand * (max + 1 - min) + min);
}
