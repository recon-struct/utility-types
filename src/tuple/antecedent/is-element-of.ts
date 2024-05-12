import type { AnyArray } from '~/any/any-array'
import type { IsExtension } from '~/extension/antecedent/is-extension'
import type { ElementOf } from '~/tuple/element-of'

/**
 * If `B extends ElementOf<A>` then `true` else `false`
 * @typeParam A - The tuple to check.
 * @group Antecedent
 * @group Tuple
 * @example
 * ```
 * type Ex1 = IsElementOf<['a', 'b', 'c'], 'a'> // true
 * type Ex2 = IsElementOf<['a', 'b', 'c'], 'z'> // false
 * ```
 */
export type IsElementOf<A extends AnyArray, B> = IsExtension<B, ElementOf<A>>
