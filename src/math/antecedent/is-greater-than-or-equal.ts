import type { Subtract } from '../subtract'
import type { IsNegative } from './is-negative'

/**
 * Determines if the value of A is greater than or equal to the value of B.
 *
 * @typeParam A - The first number or bigint.
 * @typeParam B - The second number or bigint.
 * @group Antecedent
 * @group Math
 */
export type IsGreaterThanOrEqual<
  A extends number | bigint,
  B extends number | bigint,
> = IsNegative<Subtract<A, B>> extends true ? false : true
