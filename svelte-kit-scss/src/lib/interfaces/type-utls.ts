type IntegerConst<T extends number> = `${T}` extends `${string}.${string}` ? never : T;

type NonNegativeIntegerConst<T extends IntegerConst<number>> = `${T}` extends `-${string}`
  ? never
  : T;

type UniteNonNegativeIntegerLessThan<
  N extends NonNegativeIntegerConst<number>,
  Acc extends NonNegativeIntegerConst<number>[] = []
> = Acc['length'] extends N
  ? Acc[number]
  : UniteNonNegativeIntegerLessThan<N, [...Acc, Acc['length']]>;

type UniteNonNegativeIntegerLessThanOrEqual<N extends NonNegativeIntegerConst<number>> =
  | UniteNonNegativeIntegerLessThan<N>
  | N;

export type NonNegativeIntegerRange<
  From extends NonNegativeIntegerConst<number>,
  To extends NonNegativeIntegerConst<number>
> = Exclude<UniteNonNegativeIntegerLessThanOrEqual<To>, UniteNonNegativeIntegerLessThan<From>>;
