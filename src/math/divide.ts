import type { DivDigits } from './digits/division-digits'
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

export type DivDigitNumbers<
  A extends DigitNumber,
  B extends DigitNumber,
> = MakeDigitNumber<MulSign<Sign<A>, Sign<B>>, DivDigits<Num<A>, Num<B>>>

/**
 * Divides two numbers or bigints.
 *
 * @typeParam A - The type of the dividend.
 * @typeParam B - The type of the divisor.
 */
export type Divide<
  A extends number | bigint,
  B extends number | bigint,
> = ToNumber<
  FromDigitNumber<
    Normalize<
      DivDigitNumbers<ToDigitNumber<ToString<A>>, ToDigitNumber<ToString<B>>>
    >
  >
>
