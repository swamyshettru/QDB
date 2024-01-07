export const getRandomNumber = (minVal: number, maxVal: number) => {
  minVal = Math.ceil(minVal);
  maxVal = Math.floor(maxVal);
  return Math.floor(Math.random() * (maxVal - minVal) + minVal);
};
