import type { IsExtension } from '~/any'

/**
 * If `A ≡ 1n` then `true` else `false`
 * @typeParam A - The type to check.
 * @group Antecedent
 * @group Identity
 * @example
 * ```
 * type Ex1 = IsBigIntMultIdentity<1n> // true
 * type Ex2 = IsBigIntMultIdentity<2n> // false
 * ```
 */
export type IsBigIntMultIdentity<A> = IsExtension<A, 1n>

/**
 * @deprecated - Use `IsBigIntMultIdentity` instead.
 */
export type IsBigintMultIdentity<A> = IsBigIntMultIdentity<A>
