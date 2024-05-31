import type { Subtract } from './subtract'

/**
 * Decrements a number or bigint by 1.
 *
 * @typeParam A - The input number or bigint.
 */
export type Decrement<A extends number | bigint> = Subtract<A, 1>
