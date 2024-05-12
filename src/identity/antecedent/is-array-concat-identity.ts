import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { ArrayConcatIdentity } from '~/identity/array-concat-identity'

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
export type IsArrayConcatIdentity<A> = IsEqual<A, ArrayConcatIdentity>

/**
 * @deprecated - Use `IsArrayConcatIdentity` instead.
 */
export type IsArrayIdentity<A> = IsArrayConcatIdentity<A>

/**
 * Alias for `IsArrayIdentity`
 * @typeParam A - The type to check.
 * @group Antecedent
 * @group Identity
 */
export type IsEmptyArray<A> = IsArrayConcatIdentity<A>
