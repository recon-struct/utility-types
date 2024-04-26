import type { MultiSub } from '../helpers/multi-sub'
import type { And } from '../logic/antecedent/and'
import type { IsNatural } from './antecedent/is-natural'

/**
 * Evaluate `A / B`, where `A ∈ ℕ` and `B ∈ ℕ`
 * @typeParam A - The dividend.
 * @typeParam B - The divisor.
 * @group Math
 * @example
 * ```
 * type Ex1 = Divide<9, 3> // 3
 * // NOTE only natural numbers are supported for output
 * type Ex2 = Divide<11, 3> // 3
 * ```
 */
export type Divide<A extends number, B extends number> =
  And<IsNatural<A>, IsNatural<B>> extends true ? MultiSub<A, B> : number
