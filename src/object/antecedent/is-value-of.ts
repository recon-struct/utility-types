import type { AnyObject } from '~/any/any-object'
import type { IsExtension } from '~/extension/antecedent/is-extension'
import type { ValueOf } from '~/object/value-of'

/**
 * If `B extends ValueOf<A>` then `true` else `false`
 * @typeParam A - The object to check.
 * @typeParam B - The value to search for.
 * @group Antecedent
 * @group Object
 * @example
 * ```
 * type Ex1 = IsValueOf<{ a: 1 }, 1>  // true
 * type Ex2 = IsValueOf<[1, 2, 3], 2> // true
 * ```
 */
export type IsValueOf<A extends AnyObject, B> = IsExtension<B, ValueOf<A>>
