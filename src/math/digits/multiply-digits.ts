import type { Digit } from '../utils'
import type { AddDigits } from './addition-digits'
import type { SubDigits } from './substraction-digits'

export type MulX2<A extends Digit[]> = AddDigits<A, A>
export type MulX3<A extends Digit[]> = AddDigits<A, MulX2<A>>
export type MulX4<A extends Digit[]> = MulX2<MulX2<A>>
export type MulX5<A extends Digit[]> = AddDigits<A, MulX4<A>>
export type MulX6<A extends Digit[]> = MulX2<MulX3<A>>
export type MulX7<A extends Digit[]> = SubDigits<MulX10<A>, MulX3<A>>
export type MulX8<A extends Digit[]> = SubDigits<MulX10<A>, MulX2<A>>
export type MulX9<A extends Digit[]> = SubDigits<MulX10<A>, A>
export type MulX10<A extends Digit[]> = [...A, 0]

export type MulByDigit<A extends Digit[], B extends Digit> = B extends 0
  ? [0]
  : B extends 1
    ? A
    : B extends 2
      ? MulX2<A>
      : B extends 3
        ? MulX3<A>
        : B extends 4
          ? MulX4<A>
          : B extends 5
            ? MulX5<A>
            : B extends 6
              ? MulX6<A>
              : B extends 7
                ? MulX7<A>
                : B extends 8
                  ? MulX8<A>
                  : MulX9<A>

export type MulDigits<
  A extends Digit[],
  B extends Digit[],
  Acc extends Digit[] = [],
> = B extends [infer N extends Digit, ...infer R extends Digit[]]
  ? MulDigits<A, R, AddDigits<MulByDigit<A, N>, MulX10<Acc>>>
  : Acc
