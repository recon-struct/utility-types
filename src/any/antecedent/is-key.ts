import type { AnyKey } from '~/any/any-key'
import type { IsExtension } from '~/extension/antecedent/is-extension'

/**
 * If `A extends AnyKey` then `true` else `false`
 * @group Antecedent
 * @group Any
 * @example
 * ```
 * type Ex1 = IsKey<symbol>  // true
 * type Ex2 = IsKey<string>  // true
 * type Ex3 = IsKey<number>  // true
 * type Ex4 = IsKey<boolean> // false
 * ```
 */
export type IsKey<A> = IsExtension<A, AnyKey>
