import type { IsExtension } from '~/extension/antecedent/is-extension'

/**
 * If `A extends bigint` then `true` else `false`
 * @group Antecedent
 * @group Any
 * @example
 * ```
 * type Ex1 = IsBigInt<1n> // true
 * type Ex2 = IsBigInt<1>  // false
 * ```
 */
export type IsBigInt<A> = IsExtension<A, bigint>

/**
 * @deprecated - Use `IsBigInt` instead
 */
export type IsBigint<A> = IsBigInt<A>
