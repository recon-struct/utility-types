import type { If } from '~/logic/if'
import type { IsLessThan } from './antecedent/is-less-than'

/**
 * Returns the minimum value between two numbers, where `A ∈ ℕ` and `B ∈ ℕ`.
 * @typeParam A - The first number (must be a natural number).
 * @typeParam B - The second number (must be a natural number).
 * @group Math
 * @example
 * ```
 * type Ex1 = Min<1, 3> // 1
 * type Ex2 = Min<3, 1> // 1
 * ```
 */
export type Min<A extends number, B extends number> = If<IsLessThan<A, B>, A, B>
