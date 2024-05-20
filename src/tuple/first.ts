import type { AnyArray } from '~/any/any-array'
import type { Zero } from '~/identity/num-add-identity'

/**
 * Return the first element of of tuple `A`
 * @typeParam A - The tuple to get the first element of.
 * @group Tuple
 * @example
 * ```
 * type Ex1 = First<['a', 'b', 'c']> // 'a'
 * type Ex2 = First<[1, 2, 3]>      // 1
 * ```
 * */
export type First<A extends AnyArray> = A[Zero]

/**
 * Alias of `First`
 * @group Tuple
 */
export type Head<A extends AnyArray> = First<A>
