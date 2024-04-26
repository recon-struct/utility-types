import type { Zero } from '../identity'
import type { And } from '../logic/antecedent/and'
import type { IsGreaterThan } from './antecedent/is-greater-than'
import type { IsNatural } from './antecedent/is-natural'
import type { Subtract } from './subtract'

/**
 * Evaluate `A - 1`, where `A ∈ ℕ` and `A > 0`
 * @typeParam A - The number to decrement.
 * @group Math
 * @example
 * ```
 * type Ex1 = Decrement<2> // 1
 * type Ex2 = Decrement<0> // number
 * ```
 */
export type Decrement<A extends number> =
  And<IsNatural<A>, IsGreaterThan<A, Zero>> extends true
    ? Subtract<A, 1>
    : number
