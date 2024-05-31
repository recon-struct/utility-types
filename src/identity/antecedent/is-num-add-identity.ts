import type { IsExtension } from '~/any'

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
export type IsNumAddIdentity<A> = IsExtension<A, 0>
