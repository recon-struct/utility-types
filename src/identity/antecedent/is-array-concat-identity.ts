import type { IsEqual } from '~/extension/antecedent/is-equal'

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
export type IsArrayConcatIdentity<A> = IsEqual<A, []>

/**
 * @deprecated - Use `IsArrayConcatIdentity` instead.
 */
export type IsArrayIdentity<A> = IsArrayConcatIdentity<A>

/**
 * @deprecated - Use `IsArrayConcatIdentity` instead.
 */
export type IsEmptyArray<A> = IsArrayConcatIdentity<A>
