const RandomNumberGenerator = (min, max) => {
  let num = (Math.random() * (max - min) + min).toFixed(2);
  return num;
};

export { RandomNumberGenerator };
