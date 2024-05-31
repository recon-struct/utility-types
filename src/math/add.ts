import type { CompareDigits } from './compare'
import type { AddDigits } from './digits/addition-digits'
import type { SubDigits } from './digits/substraction-digits'
import type {
  DigitNumber,
  FromDigitNumber,
  InvertSign,
  MakeDigitNumber,
  Normalize,
  Num,
  Sign,
  ToDigitNumber,
  ToNumber,
  ToString,
} from './utils'

type AddDigitNumbers<A extends DigitNumber, B extends DigitNumber> =
  Sign<A> extends Sign<B>
    ? MakeDigitNumber<Sign<A>, AddDigits<Num<A>, Num<B>>>
    : CompareDigits<Num<A>, Num<B>> extends 1
      ? MakeDigitNumber<Sign<A>, SubDigits<Num<A>, Num<B>>>
      : MakeDigitNumber<InvertSign<A>, SubDigits<Num<B>, Num<A>>>

/**
 * Adds two numbers or bigints.
 *
 * @typeParam A - The type of the first number or bigint.
 * @typeParam B - The type of the second number or bigint.
 */
export type Add<
  A extends number | bigint,
  B extends number | bigint,
> = ToNumber<
  FromDigitNumber<
    Normalize<
      AddDigitNumbers<ToDigitNumber<ToString<A>>, ToDigitNumber<ToString<B>>>
    >
  >
>
