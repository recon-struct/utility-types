import type { IsEqual } from '../../any/antecedent/is-equal'
import type { StringConcatIdentity } from '../string-concat-identity'

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
export type IsStringConcatIdentity<A> = IsEqual<A, StringConcatIdentity>

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