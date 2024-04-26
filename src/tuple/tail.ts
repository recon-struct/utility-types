import type { AnyArray } from '../any/any-array'

/**
 * Return the tail of tuple `A`
 * @typeParam A - The tuple to get the tail of.
 * @group Tuple
 * @example
 * ```
 * type Ex = Tail<['a', 'b', 'c']> // ['b', 'c']
 * ```
 */
export type Tail<A extends AnyArray> = A extends [any, ...infer B] ? B : never
