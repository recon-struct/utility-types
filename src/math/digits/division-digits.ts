import type { CompareDigits } from '../compare'
import type { Digit, Digits, TrimZeros } from '../utils'
import type { AddDigits } from './addition-digits'
import type { SubDigits } from './substraction-digits'

export type Rest<A extends Digit[]> = A extends [
  Digit,
  ...infer B extends Digit[],
]
  ? B
  : never

type TruncateWith<
  A extends Digit[],
  B extends Digit[],
  Acc extends Digit[] = [],
> = B extends []
  ? [A, Acc]
  : A extends [infer C extends Digit, ...infer D extends Digit[]]
    ? TruncateWith<D, Rest<B>, [...Acc, C]>
    : [A, Acc]

type DivModByDigit<
  A extends Digit[],
  B extends Digit[],
  Mul extends Digit[] = [0],
  IterTable extends Digit[] = Digits,
  NextMul extends Digit[] = AddDigits<B, Mul>,
  Comp = CompareDigits<A, NextMul>,
> = IterTable extends [
  infer Iteration extends Digit,
  ...infer Next extends Digit[],
]
  ? Comp extends 0
    ? { Quotient: Next[0]; Remainder: [0] }
    : Comp extends 1
      ? DivModByDigit<A, B, NextMul, Next>
      : {
          Quotient: Iteration
          Remainder: SubDigits<A, Mul>
        }
  : never

/**
 * compute the long division of a number by a divisor
 * @param A the Numerator Cut after M digits
 * @param B the Numerator Cut with M first digits
 * @param C the Divisor
 * @param D the Quotient
 * @see https://en.wikipedia.org/wiki/Long_division#Algorithm_for_arbitrary_base
 */
export type DivModDigits<
  A extends Digit[],
  B extends Digit[],
  C extends Digit[],
  D extends Digit[] = [],
> =
  DivModByDigit<B, C> extends {
    Quotient: infer E extends Digit
    Remainder: infer F extends Digit[]
  }
    ? A extends [infer G extends Digit, ...infer H extends Digit[]]
      ? DivModDigits<H, TrimZeros<[...F, G]>, C, [...D, E]>
      : { Quotient: [...D, E]; Remainder: F }
    : never

export type DivDigits<A extends Digit[], B extends Digit[]> =
  TruncateWith<A, B> extends [infer C extends Digit[], infer D extends Digit[]]
    ? DivModDigits<C, D, B>['Quotient']
    : never

export type ModDigits<A extends Digit[], B extends Digit[]> =
  TruncateWith<A, B> extends [infer C extends Digit[], infer D extends Digit[]]
    ? DivModDigits<C, D, B>['Remainder']
    : never
