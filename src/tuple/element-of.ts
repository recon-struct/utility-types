import type { AnyArray } from '~/any/any-array'
import type { Indices } from '~/tuple/indices'

/**
 * A union of all elements of `A`.
 * @typeParam A - The tuple to get the elements of.
 * @group Tuple
 * @example
 * ```
 * type Ex = ElementOf<'a', 'b', 'c'> // 'a' | 'b' | 'c'
 * ```
 */
export type ElementOf<A extends AnyArray> = A[Indices<A>]
