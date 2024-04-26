import type { IsLessThan } from './antecedent'

/**
 * Returns the maximum value between two numbers.
 * @typeParam A - The first number.
 * @typeParam B - The second number.
 * @group Math
 * @example
 * ```
 * type Ex1 = Max<1, 3> // 3
 * type Ex2 = Max<3, 1> // 3
 * ```
 */
export type Max<A extends number, B extends number> =
  IsLessThan<A, B> extends true ? B : A
