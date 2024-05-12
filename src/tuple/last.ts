import type { AnyArray } from '~/any/any-array'
import type { Indices } from '~/tuple/indices'

/**
 * Return the last entry of tuple `A`
 * @group Tuple
 * @example
 * ```
 * type Ex = Last<['a', 'b', 'c']> // 'c'
 * ```
 */
export type Last<A extends AnyArray> = A extends readonly [...infer _, infer B]
  ? B
  : A[Indices<A>]
