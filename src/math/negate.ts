import type {
  FromDigitNumber,
  Normalize,
  ToDigitNumber,
  ToNumber,
  ToString,
} from './utils'

/**
 * Negates a number or bigint.
 * If the input is positive, it returns the negative value.
 * If the input is negative, it returns the positive value.
 * If the input is zero, it returns zero.
 *
 * @typeParam A - The input number or bigint.
 */
export type Negate<A extends number | bigint> = A extends 0 | 0n
  ? ToNumber<FromDigitNumber<Normalize<ToDigitNumber<ToString<A>>>>>
  : `${A}` extends `-${infer B extends number | bigint}`
    ? B
    : `-${A}` extends `${infer C extends number | bigint}`
      ? C
      : never
