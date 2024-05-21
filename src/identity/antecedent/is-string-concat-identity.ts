import type { IsEqual } from '~/extension/antecedent/is-equal'

/**
 * If `A ≡ ''` then `true` else `false`
 * @typeParam A - The type to check.
 * @group Antecedent
 * @group Identity
 * @example
 * ```
 * type Ex1 = IsStringIdentity<''>    // true
 * type Ex2 = IsStringIdentity<'abc'> // false
 * ```
 */
export type IsStringConcatIdentity<A> = IsEqual<A, []>

/**
 * @deprecated - Use `IsStringConcatIdentity` instead.
 */
export type IsStringIdentity<A> = IsStringConcatIdentity<A>

/**
 * Alias for `IsStringIdentity`
 * @typeParam A - The type to check.
 * @group Antecedent
 * @group Identity
 */
export type IsEmptyString<A> = IsStringConcatIdentity<A>
