import type { IsLessThan } from './antecedent/is-less-than'

/**
 * Returns the minimum value between two numbers or bigints.
 *
 * @typeParam A - The first number or bigint.
 * @typeParam B - The second number or bigint.
 * @group Math
 * @example
 * ```
 * type Ex1 = Min<1, 2> // 1
 * type Ex2 = Min<0, 1> // 0
 * type Ex3 = Min<-1, 1> // -1
 * type Ex4 = Min<1, 1> // 1
 * ```
 */
export type Min<A extends number | bigint, B extends number | bigint> =
  IsLessThan<A, B> extends true ? A : B
