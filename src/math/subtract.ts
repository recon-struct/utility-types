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

type SubDigitNumbers<A extends DigitNumber, B extends DigitNumber> =
  Sign<A> extends Sign<B>
    ? CompareDigits<Num<A>, Num<B>> extends 1
      ? MakeDigitNumber<Sign<A>, SubDigits<Num<A>, Num<B>>>
      : MakeDigitNumber<InvertSign<A>, SubDigits<Num<B>, Num<A>>>
    : MakeDigitNumber<Sign<A>, AddDigits<Num<A>, Num<B>>>

export type Subtract<
  A extends number | bigint,
  B extends number | bigint,
> = ToNumber<
  FromDigitNumber<
    Normalize<
      SubDigitNumbers<ToDigitNumber<ToString<A>>, ToDigitNumber<ToString<B>>>
    >
  >
>
