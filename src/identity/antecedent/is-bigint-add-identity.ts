import type { IsExtension } from '~/any'

/**
 * If `A ≡ 0n` then `true` else `false`
 * @typeParam A - The type to check.
 * @group Antecedent
 * @group Identity
 * @example
 * ```
 * type Ex1 = IsBigIntAddIdentity<0n> // true
 * type Ex2 = IsBigIntAddIdentity<2n> // false
 * ```
 */
export type IsBigIntAddIdentity<A> = IsExtension<A, 0n>
