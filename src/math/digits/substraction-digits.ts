import type { Digit } from '../utils'

type SubDigitTable = [
  [
    [0, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    [1, 0, 9, 8, 7, 6, 5, 4, 3, 2],
    [2, 1, 0, 9, 8, 7, 6, 5, 4, 3],
    [3, 2, 1, 0, 9, 8, 7, 6, 5, 4],
    [4, 3, 2, 1, 0, 9, 8, 7, 6, 5],
    [5, 4, 3, 2, 1, 0, 9, 8, 7, 6],
    [6, 5, 4, 3, 2, 1, 0, 9, 8, 7],
    [7, 6, 5, 4, 3, 2, 1, 0, 9, 8],
    [8, 7, 6, 5, 4, 3, 2, 1, 0, 9],
    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
  ],
  [
    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    [0, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    [1, 0, 9, 8, 7, 6, 5, 4, 3, 2],
    [2, 1, 0, 9, 8, 7, 6, 5, 4, 3],
    [3, 2, 1, 0, 9, 8, 7, 6, 5, 4],
    [4, 3, 2, 1, 0, 9, 8, 7, 6, 5],
    [5, 4, 3, 2, 1, 0, 9, 8, 7, 6],
    [6, 5, 4, 3, 2, 1, 0, 9, 8, 7],
    [7, 6, 5, 4, 3, 2, 1, 0, 9, 8],
    [8, 7, 6, 5, 4, 3, 2, 1, 0, 9],
  ],
]

type SubDigitCarryTable = [
  [
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  ],
]

type SubDigit<
  A extends Digit,
  B extends Digit,
  Carry extends 0 | 1 = 0,
> = SubDigitTable[Carry][A][B]

type SubCarryDigit<
  A extends Digit,
  B extends Digit,
  Carry extends 0 | 1 = 0,
> = SubDigitCarryTable[Carry][A][B]

export type SubDigits<
  A extends Digit[],
  B extends Digit[],
  Carry extends 0 | 1 = 0,
  Acc extends Digit[] = [],
> = A extends [...infer C extends Digit[], infer D extends Digit]
  ? B extends [...infer E extends Digit[], infer F extends Digit]
    ? SubDigits<
        C,
        E,
        SubCarryDigit<D, F, Carry>,
        [SubDigit<D, F, Carry>, ...Acc]
      >
    : SubDigits<
        C,
        [],
        SubCarryDigit<D, 0, Carry>,
        [SubDigit<D, 0, Carry>, ...Acc]
      >
  : B extends [...infer G extends Digit[], infer H extends Digit]
    ? SubDigits<
        [],
        G,
        SubCarryDigit<0, H, Carry>,
        [SubDigit<0, H, Carry>, ...Acc]
      >
    : Carry extends 1
      ? [...Acc, 9]
      : Acc
