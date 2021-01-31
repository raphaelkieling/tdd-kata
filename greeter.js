module.exports = (name) => {
  const trimedName = name.trim();
  const capitalizedName =
    trimedName.charAt(0).toUpperCase() + trimedName.slice(1);

  const getValue = () => {
    const currentHour = new Date().getHours();

    if (currentHour >= 6 && currentHour <= 12) {
      return `Good morning ${capitalizedName}`;
    } else if (currentHour >= 18 && currentHour <= 22) {
      return `Good evening ${capitalizedName}`;
    } else if (
      (currentHour > 22 && currentHour <= 23) ||
      (currentHour >= 0 && currentHour < 6)
    ) {
      return `Good night ${capitalizedName}`;
    } else {
      return `Hello ${capitalizedName}`;
    }
  };

  const value = getValue();
  console.log(value);
  return getValue();
};
