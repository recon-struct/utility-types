import type { Not } from '~/logic/antecedent/not'
import type { IsFloat } from '~/math/antecedent/is-float'

/**
 * If `A ∈ ℤ` then `true` else `false`.
 * @typeParam A - The number to check.
 * @group Antecedent
 * @group Math
 * @example
 * ```
 * type Ex1 = IsInteger<1>   // true
 * type Ex2 = IsInteger<2.3> // false
 * ```
 */
export type IsInteger<A extends number> = Not<IsFloat<A>>
