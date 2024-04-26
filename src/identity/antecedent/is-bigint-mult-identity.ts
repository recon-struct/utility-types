import type { IsExtension } from '../../any'
import type { NumMultIdentity } from '../num-mult-identity'

/**
 * If `A ≡ 1n` then `true` else `false`
 * @typeParam A - The type to check.
 * @group Antecedent
 * @group Identity
 * @example
 * ```
 * type Ex1 = IsBigintMultIdentity<1n> // true
 * type Ex2 = IsBigintMultIdentity<2n> // false
 * ```
 */
export type IsBigintMultIdentity<A> = IsExtension<A, NumMultIdentity>
