import type { AnyArray } from '../any'
import type { Indices } from './indices'

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
