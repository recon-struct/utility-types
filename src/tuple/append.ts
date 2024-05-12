import type { AnyArray } from '~/any/any-array'

/**
 * Append `B` onto tuple `A`
 * @typeParam A - The tuple to append to.
 * @group Tuple
 * @example
 * ```
 * type Ex = Append<['a', 'b'], 'c'> // ['a', 'b', 'c']
 * ```
 */
export type Append<A extends AnyArray, B> = [...A, B]
