import type { If } from '~/logic/if'
import type { IsLessThan } from './antecedent'

/**
 * Returns the maximum value between two numbers, where `A ∈ ℕ` and `B ∈ ℕ`.
 * @typeParam A - The first number (must be a natural number).
 * @typeParam B - The second number (must be a natural number).
 * @group Math
 * @example
 * ```
 * type Ex1 = Max<1, 3> // 3
 * type Ex2 = Max<3, 1> // 3
 * ```
 */
export type Max<A extends number, B extends number> = If<IsLessThan<A, B>, B, A>
