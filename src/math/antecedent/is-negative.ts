import type { IsExtension } from '~/extension/antecedent/is-extension'

/**
 * If `A < 0` then `true` else `false`
 * @typeParam A - The number to check.
 * @group Antecedent
 * @group Math
 * @example
 * ```
 * type Ex1 = IsNegative<-1> // true
 * type Ex2 = IsNegative<0>  // false
 * type Ex3 = IsNegative<1>  // false
 * ```
 */
export type IsNegative<A extends number> = IsExtension<`${A}`, `-${number}`>
