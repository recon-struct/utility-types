import type { IsEqual } from '../../any/antecedent/is-equal'
import type { ArrayConcatIdentity } from '../array-concat-identity'

/**
 * If `A ≡ []` then `true` else `false`
 * @typeParam A - The type to check.
 * @group Antecedent
 * @group Identity
 * @example
 * ```
 * type Ex1 = IsArrayIdentity<[]>     // true
 * type Ex2 = IsArrayIdentity<[true]> // false
 * ```
 */
export type IsArrayIdentity<A> = IsEqual<A, ArrayConcatIdentity>

/**
 * Alias for `IsArrayIdentity`
 * @typeParam A - The type to check.
 * @group Antecedent
 * @group Identity
 */
export type IsEmptyArray<A> = IsArrayIdentity<A>
