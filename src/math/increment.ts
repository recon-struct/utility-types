import type { Add } from './add'

/**
 * Increments a number or bigint by 1.
 *
 * @typeParam A - The input number or bigint.
 * @group Math
 * @example
 * ```
 * type Ex1 = Increment<0> // 1
 * type Ex2 = Increment<1n> // 2
 * ```
 */
export type Increment<A extends number | bigint> = Add<A, 1>
