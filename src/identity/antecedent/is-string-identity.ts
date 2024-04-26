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
export type IsStringIdentity<A> = IsEqual<A, StringConcatIdentity>

/**
 * Alias for `IsStringIdentity`
 * @typeParam A - The type to check.
 * @group Antecedent
 * @group Identity
 */
export type IsEmptyString<A> = IsStringIdentity<A>
