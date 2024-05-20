import type { AnyArray } from '~/any/any-array'

/**
 * Push `B` onto tuple `A`
 * @typeParam A - The tuple to push to.
 * @group Tuple
 * @example
 * ```
 * type Ex = Push<['a', 'b'], 'c'> // ['a', 'b', 'c']
 * ```
 */
export type Push<A extends AnyArray, B> = [...A, B]

/**
 * @deprecated - Use `Push` instead.
 */
export type Append<A extends AnyArray, B> = Push<A, B>