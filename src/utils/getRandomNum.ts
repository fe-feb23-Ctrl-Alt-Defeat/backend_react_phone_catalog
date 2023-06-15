export const getRandomNum = (ceil: number) => {
  return Math.ceil(Math.random() * (ceil - 1)) + 1;
}
