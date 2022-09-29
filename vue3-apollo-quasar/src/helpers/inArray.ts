type ArrayData = {
  name: string;
};

export const inArray = (
  array: ArrayData[],
  target: string,
): { name: string } | undefined => {
  return array.find((arr) => arr.name === target);
};
