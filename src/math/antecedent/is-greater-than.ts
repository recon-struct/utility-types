import type { Subtract } from '../subtract'
import type { IsNegative } from './is-negative'

/**
 * Determines if the value of A is greater than the value of B.
 *
 * @typeParam A - The first number or bigint.
 * @typeParam B - The second number or bigint.
 * @group Antecedent
 * @group Math
 */
export type IsGreaterThan<
  A extends number | bigint,
  B extends number | bigint,
> = IsNegative<Subtract<B, A>>
