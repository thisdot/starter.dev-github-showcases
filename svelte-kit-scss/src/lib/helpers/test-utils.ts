import { expect } from 'vitest';

const camelToSnakeCase = (str: string) =>
  str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

export const expectCamelFromSnakeCasePropertiesMapping = <
  TCamelCasedProps extends Record<string, unknown>,
  TSnakeCasedProps extends Record<string, unknown>
>(
  mappingResult: TCamelCasedProps,
  mappingInput: TSnakeCasedProps,
  excludeProps: (keyof TCamelCasedProps)[] = []
): void => {
  const resultEntriesToCheck = Object.entries(mappingResult).filter(
    ([propName]) => !excludeProps.includes(propName)
  );
  resultEntriesToCheck.forEach(([resultPropName, resultPropValue]) => {
    const expectedInputPropName = camelToSnakeCase(resultPropName);
    const inputPropValue = mappingInput[expectedInputPropName];
    expect(resultPropValue).toEqual(inputPropValue);
  });
};
