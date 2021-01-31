module.exports = (value) => {
  return value
    .split("")
    .map((item, index) => {
      if (/[A-Z]/g.test(item)) {
        return index;
      } else {
        return null;
      }
    })
    .filter((item) => item !== null);
};
