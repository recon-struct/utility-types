import type { IsExtension } from '../../any'
import type { NumAddIdentity } from '../num-add-identity'

/**
 * If `A ≡ 0n` then `true` else `false`
 * @typeParam A - The type to check.
 * @group Antecedent
 * @group Identity
 * @example
 * ```
 * type Ex1 = IsBigintAddIdentity<0n> // true
 * type Ex2 = IsBigintAddIdentity<2n> // false
 * ```
 */
export type IsBigintAddIdentity<A> = IsExtension<A, NumAddIdentity>
