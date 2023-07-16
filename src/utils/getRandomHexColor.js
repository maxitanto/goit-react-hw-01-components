export const getRandomHexColor = () => {
  let color = '#' + Math.random().toString(16).slice(3, 9);
  return color;
};
