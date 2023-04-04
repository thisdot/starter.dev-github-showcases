export const parseSortParams = (options, value, position) => {
  const key = Object.keys(options).find((key) => options[key] === value);
  if (key === undefined) {
    throw new Error(`Invalid sort option: ${value}`);
  }
  if (position !== 0 && position !== 1) {
    throw new Error(`Invalid position value: ${position}`);
  }
  return key.split('^')[position];
};
