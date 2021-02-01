const romanConverter = (value) => {
  let result = "";
  if (value === 1) {
    result += "I";
  } else if (value > 2) {
    result += "I";
    result += "I";
    result += "I";
  } else if (value > 1) {
    result += "I";
    result += "I";
  }

  return result;
};

module.exports = romanConverter;
