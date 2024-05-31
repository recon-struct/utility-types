import type {
  FromDigitNumber,
  Normalize,
  ToDigitNumber,
  ToNumber,
  ToString,
} from './utils'

/**
 * Returns the absolute value of a number or bigint.
 *
 * @typeParam A - The input number or bigint.
 */
export type Absolute<A extends number | bigint> =
  `${A}` extends `-${infer U extends number | bigint}`
    ? U
    : ToNumber<FromDigitNumber<Normalize<ToDigitNumber<ToString<A>>>>>
