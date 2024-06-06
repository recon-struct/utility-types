import type { IsGreaterThan } from './antecedent/is-greater-than'

/**
 * Returns the maximum value between two numbers or bigints.
 *
 * @typeParam A - The first number or bigint.
 * @typeParam B - The second number or bigint.
 * @group Math
 */
export type Max<A extends number | bigint, B extends number | bigint> =
  IsGreaterThan<A, B> extends true ? A : B
