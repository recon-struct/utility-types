import type { IsZero } from '../../identity/antecedent/is-num-add-identity'
import type { Or } from '../../logic/antecedent/or'
import type { IsNegative } from './is-negative'

/**
 * If `A ≤ 0` then `true` else `false`
 * @typeParam A - The number to check.
 * @group Antecedent
 * @group Math
 * @example
 * ```
 * type Ex1 = IsNonPositive<-1> // true
 * type Ex2 = IsNonPositive<0>  // true
 * type Ex3 = IsNonPositive<1>  // false
 * ```
 */
export type IsNonPositive<A extends number> = Or<IsZero<A>, IsNegative<A>>
