import type { IsZero } from '../../identity/antecedent/is-num-add-identity'
import type { And } from '../../logic/antecedent/and'
import type { Not } from '../../logic/antecedent/not'
import type { IsNonNegative } from './is-non-negative'

/**
 * If `A > 0` then `true` else `false`
 * @typeParam A - The number to check.
 * @group Antecedent
 * @group Math
 * @example
 * ```
 * type Ex1 = IsPositive<-1> // false
 * type Ex2 = IsPositive<0>  // false
 * type Ex3 = IsPositive<1>  // true
 * ```
 */
export type IsPositive<A extends number> = And<Not<IsZero<A>>, IsNonNegative<A>>
