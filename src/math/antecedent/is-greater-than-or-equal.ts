import type { Not } from '~/logic/antecedent/not'
import type { IsLessThan } from '~/math/antecedent/is-less-than'

/**
 * Evaluate `A ≥ B`, where `A ∈ ℕ` and `B ∈ ℕ`
 * @typeParam A - The number to compare.
 * @typeParam B - The number to compare against.
 * @group Antecedent
 * @group Math
 * @example
 * ```
 * type Ex1 = IsGreaterThanOrEqual<3, 1> // true
 * type Ex2 = IsGreaterThanOrEqual<3, 3> // true
 * type Ex3 = IsGreaterThanOrEqual<1, 3> // false
 * ```
 */
export type IsGreaterThanOrEqual<A extends number, B extends number> = Not<
  IsLessThan<A, B>
>
