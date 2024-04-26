import type { IsLessThan } from './antecedent/is-less-than'

/**
 * Returns the minimum value between two numbers.
 *
 * @typeParam A - The first number.
 * @typeParam B - The second number.
 * @group Math
 * @example
 * ```
 * type Ex1 = Min<1, 3> // 1
 * type Ex2 = Min<3, 1> // 1
 * ```
 */
export type Min<A extends number, B extends number> =
  IsLessThan<A, B> extends true ? A : B
