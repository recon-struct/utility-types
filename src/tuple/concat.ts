import type { AnyArray } from '../any/any-array'

/**
 * Concatenate `A` and `B`
 * @typeParam A - The first tuple.
 * @typeParam B - The second tuple.
 * @group Tuple
 * @example
 * ```
 * type Ex = Concat<['a', 'b', 'c'], [1, 2, 3]> // ["a", "b", "c", 1, 2, 3]
 * ```
 */
export type Concat<A extends AnyArray, B extends AnyArray> = [...A, ...B]
