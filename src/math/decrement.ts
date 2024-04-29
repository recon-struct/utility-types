import type { If } from '~/logic/if'
import type { Zero } from '../identity'
import type { And } from '../logic/antecedent/and'
import type { IsGreaterThan } from './antecedent/is-greater-than'
import type { IsNatural } from './antecedent/is-natural'
import type { Subtract } from './subtract'

/**
 * Evaluate `A - 1`, where `A > 0` and `A ∈ ℕ`
 * @typeParam A - The number to decrement.
 * @group Math
 * @example
 * ```
 * type Ex1 = Decrement<2> // 1
 * type Ex2 = Decrement<0> // number
 * ```
 */
export type Decrement<A extends number> = If<
  And<IsNatural<A>, IsGreaterThan<A, Zero>>,
  Subtract<A, 1>,
  number
>
