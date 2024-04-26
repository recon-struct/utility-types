import type { IsExtension } from '../../any'
import type { NumMultIdentity } from '../num-mult-identity'

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
export type IsNumMultIdentity<A> = IsExtension<A, NumMultIdentity>

/**
 * Alias for `IsNumMultIdentity`
 * @typeParam A - The type to check.
 * @group Antecedent
 * @group Identity
 */
export type IsOne<A> = IsNumMultIdentity<A>
