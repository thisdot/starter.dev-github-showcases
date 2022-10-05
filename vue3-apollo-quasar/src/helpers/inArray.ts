type ArrayData = {
  name: string;
};

export const inArray = (
  array: ArrayData[],
  target: string,
): ArrayData | undefined => {
  return array.find((arr) => arr.name === target);
};
