import type { AnyArray } from '~/any/any-array'

/**
 * Return the rest of tuple `A`
 * @typeParam A - The tuple to get the rest of.
 * @group Tuple
 * @example
 * ```
 * type Ex = Rest<['a', 'b', 'c']> // ['b', 'c']
 * ```
 */
export type Rest<A extends AnyArray> = A extends [any, ...infer B] ? B : never

/**
 * @deprecated - Use `Rest` instead.
 */
export type Tail<A extends AnyArray> = Rest<A>