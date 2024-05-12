import type { AnyArray } from '~/any/any-array'
import type { Zero } from '~/identity/num-add-identity'

/**
 * Return the head of tuple `A`
 * @typeParam A - The tuple to get the head of.
 * @group Tuple
 * @example
 * ```
 * type Ex1 = Head<['a', 'b', 'c']> // 'a'
 * type Ex2 = First<[1, 2, 3]>      // 1
 * ```
 * */
export type Head<A extends AnyArray> = A[Zero]

/**
 * Alias of `Head`
 * @group Tuple
 */
export type First<A extends AnyArray> = Head<A>
