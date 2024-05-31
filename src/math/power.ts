import type { PowerDigits } from './digits/power-digits'
import type {
  Digit,
  DigitNumber,
  FromDigitNumber,
  MakeDigitNumber,
  Normalize,
  Num,
  Sign,
  ToDigitNumber,
  ToNumber,
  ToString,
} from './utils'

type PowerSign<A extends '' | '-', B extends DigitNumber> = A extends '-'
  ? Num<B> extends [...Digit[], 0 | 2 | 4 | 6 | 8]
    ? ''
    : '-'
  : ''

export type PowerDigitNumbers<A extends DigitNumber, B extends DigitNumber> =
  Sign<B> extends '-'
    ? MakeDigitNumber<Sign<A>, [0]>
    : MakeDigitNumber<PowerSign<Sign<A>, B>, PowerDigits<Num<A>, Num<B>>>

/**
 * Calculates the power of two numbers.
 *
 * @typeParam A - The base number.
 * @typeParam B - The exponent number.
 */
export type Power<
  A extends number | bigint,
  B extends number | bigint,
> = ToNumber<
  FromDigitNumber<
    Normalize<
      PowerDigitNumbers<ToDigitNumber<ToString<A>>, ToDigitNumber<ToString<B>>>
    >
  >
>
