export const parseSortParams = (
  options: Record<string, string>,
  value: string,
  position: number
) =>
  Object.keys(options)
    .find((key) => options[key] === value)
    ?.split('^')[position];
