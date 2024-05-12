import type { IsExtension } from '~/any'
import type { NumAddIdentity } from '~/identity/num-add-identity'

/**
 * If `A ≡ 0` then `true` else `false`
 * @typeParam A - The type to check.
 * @group Antecedent
 * @group Identity
 * @example
 * ```
 * type Ex1 = IsNumAddIdentity<0> // true
 * type Ex2 = IsNumAddIdentity<2> // false
 * ```
 */
export type IsNumAddIdentity<A> = IsExtension<A, NumAddIdentity>

/**
 * Alias for `IsNumAddIdentity`
 * @typeParam A - The type to check.
 * @group Antecedent
 * @group Identity
 */
export type IsZero<A> = IsNumAddIdentity<A>
