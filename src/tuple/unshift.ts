import type { AnyArray } from '~/any/any-array'

/**
 * Unshift `B` onto tuple `A`
 * @group Tuple
 * @example
 * ```
 * type Ex = Unshift<[2, 3], 1> // [1, 2, 3]
 * ```
 */
export type Unshift<A extends AnyArray, B> = [B, ...A]

/**
 * @deprecated - Use `Unshift` instead.
 */
export type Prepend<A extends AnyArray, B> = Unshift<A, B>