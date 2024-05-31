import type { Digit, TrimZeros } from '../utils'
import type { DivModDigits } from './division-digits'
import type { MulDigits } from './multiply-digits'

export type PowerDigits<
  A extends Digit[],
  B extends Digit[],
  Acc extends Digit[] = [1],
> = B extends [0]
  ? [1]
  : B extends [1]
    ? MulDigits<A, Acc>
    : B extends [infer C extends Digit, ...infer D extends Digit[]]
      ? DivModDigits<D, [C], [2]> extends {
          Quotient: infer E extends Digit[]
          Remainder: infer F extends Digit[]
        }
        ? TrimZeros<F> extends [0]
          ? PowerDigits<MulDigits<A, A>, TrimZeros<E>, Acc>
          : PowerDigits<MulDigits<A, A>, TrimZeros<E>, MulDigits<A, Acc>>
        : never
      : Acc
