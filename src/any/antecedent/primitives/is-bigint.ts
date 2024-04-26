import type { IsExtension } from '../is-extension'

/**
 * If `A extends bigint` then `true` else `false`
 * @group Antecedent
 * @group Any
 * @example
 * ```
 * type Ex1 = IsBigint<1n> // true
 * type Ex2 = IsBigint<1>  // false
 * ```
 */
export type IsBigint<A> = IsExtension<A, bigint>
