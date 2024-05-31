import type {
  Digit,
  DigitNumber,
  Num,
  Sign,
  ToDigitNumber,
  ToString,
} from './utils'

export type CompareLength<
  A extends any[],
  B extends any[],
> = A['length'] extends B['length'] ? 1 : 0

export type DigitCompareTable = [
  [0, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [1, 0, -1, -1, -1, -1, -1, -1, -1, -1],
  [1, 1, 0, -1, -1, -1, -1, -1, -1, -1],
  [1, 1, 1, 0, -1, -1, -1, -1, -1, -1],
  [1, 1, 1, 1, 0, -1, -1, -1, -1, -1],
  [1, 1, 1, 1, 1, 0, -1, -1, -1, -1],
  [1, 1, 1, 1, 1, 1, 0, -1, -1, -1],
  [1, 1, 1, 1, 1, 1, 1, 0, -1, -1],
  [1, 1, 1, 1, 1, 1, 1, 1, 0, -1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
]

export type DigitCompare<
  A extends Digit,
  B extends Digit,
> = DigitCompareTable[A][B]

export type CompareDigitsWithEqualLength<
  A extends Digit[],
  B extends Digit[],
> = A extends [infer C extends Digit, ...infer D extends Digit[]]
  ? B extends [infer E extends Digit, ...infer F extends Digit[]]
    ? DigitCompare<C, E> extends 0
      ? CompareDigitsWithEqualLength<D, F>
      : DigitCompare<C, E>
    : 0
  : 0

export type CompareDigits<A extends Digit[], B extends Digit[]> =
  CompareLength<A, B> extends 1
    ? CompareDigitsWithEqualLength<A, B>
    : keyof B extends keyof A
      ? 1
      : -1

export type CompareDigitNumbers<A extends DigitNumber, B extends DigitNumber> =
  Sign<A> extends Sign<B>
    ? Sign<A> extends ''
      ? CompareDigits<Num<A>, Num<B>>
      : CompareDigits<Num<B>, Num<A>>
    : Sign<A> extends '-'
      ? -1
      : 1

/**
 * Compare two numbers
 * @param A - First number
 * @param B - Second number
 * @returns 0 if A = B, 1 if A > B, -1 if A < B
 */
export type Compare<
  A extends number | bigint,
  B extends number | bigint,
> = A extends B
  ? 0
  : CompareDigitNumbers<ToDigitNumber<ToString<A>>, ToDigitNumber<ToString<B>>>
