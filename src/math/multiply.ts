import type { MulDigits } from './digits/multiply-digits'
import type {
  DigitNumber,
  FromDigitNumber,
  MakeDigitNumber,
  MulSign,
  Normalize,
  Num,
  Sign,
  ToDigitNumber,
  ToNumber,
  ToString,
} from './utils'

export type MulDigitNumbers<
  A extends DigitNumber,
  B extends DigitNumber,
> = MakeDigitNumber<MulSign<Sign<A>, Sign<B>>, MulDigits<Num<A>, Num<B>>>

/**
 * Multiplies two numbers or bigints.
 *
 * @typeParam A - The first number or bigint.
 * @typeParam B - The second number or bigint.
 */
export type Multiply<
  A extends number | bigint,
  B extends number | bigint,
> = ToNumber<
  FromDigitNumber<
    Normalize<
      MulDigitNumbers<ToDigitNumber<ToString<A>>, ToDigitNumber<ToString<B>>>
    >
  >
>
