import type { If } from '~/logic/if'
import type { MultiSub } from '../helpers/multi-sub'
import type { And } from '../logic/antecedent/and'
import type { IsNatural } from './antecedent/is-natural'

/**
 * Evaluate `A / B`, where `A ∈ ℕ` and `B ∈ ℕ`.
 * @typeParam A - The dividend (must be a natural number).
 * @typeParam B - The divisor (must be a natural number).
 * @group Math
 * @example
 * ```
 * type Ex1 = Divide<9, 3> // 3
 * // NOTE only natural numbers are supported for output
 * type Ex2 = Divide<11, 3> // 3
 * ```
 */
export type Divide<A extends number, B extends number> = If<
  And<IsNatural<A>, IsNatural<B>>,
  MultiSub<A, B>,
  number
>
