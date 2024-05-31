import type { ModDigits } from './digits/division-digits'
import type {
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

export type ModDigitNumbers<
  A extends DigitNumber,
  B extends DigitNumber,
> = MakeDigitNumber<Sign<A>, ModDigits<Num<A>, Num<B>>>

/**
 * Calculates the modulus of two numbers or bigints.
 *
 * @typeParam A - The type of the dividend.
 * @typeParam B - The type of the divisor.
 */
export type Mod<
  A extends number | bigint,
  B extends number | bigint,
> = ToNumber<
  FromDigitNumber<
    Normalize<
      ModDigitNumbers<ToDigitNumber<ToString<A>>, ToDigitNumber<ToString<B>>>
    >
  >
>
