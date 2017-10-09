const changeCase = (name) => {
  return name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
};

const nameFormatter = (name) => {
  if (name.includes(' ')) {
    return name.split(' ').map(changeCase).join(' ');
  } else {
    return changeCase(name);
  }
};

const phoneNumberFormatter = (number) => {
  return `(${number.slice(0, 3)}) ${number.slice(3, 6)}-${number.slice(6, 10)}`;
};

module.exports = {
  nameFormatter: nameFormatter,
  phoneNumberFormatter: phoneNumberFormatter
};