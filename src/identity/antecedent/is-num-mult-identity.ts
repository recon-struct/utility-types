import type { IsExtension } from '~/any'

/**
 * If `A ≡ 1` then `true` else `false`
 * @typeParam A - The type to check.
 * @group Antecedent
 * @group Identity
 * @example
 * ```
 * type Ex1 = IsNumMultIdentity<1> // true
 * type Ex2 = IsNumMultIdentity<2> // false
 * ```
 */
export type IsNumMultIdentity<A> = IsExtension<A, 1>

/**
 * Alias for `IsNumMultIdentity`
 * @typeParam A - The type to check.
 * @group Antecedent
 * @group Identity
 */
export type IsOne<A> = IsNumMultIdentity<A>
