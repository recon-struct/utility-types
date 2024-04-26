import type { And } from '../logic/antecedent/and'
import type { IsLessThan } from './antecedent/is-less-than'
import type { IsNatural } from './antecedent/is-natural'
import type { Subtract } from './subtract'

/**
 * Evaluate `A % B`, where `A ∈ ℕ` and `B ∈ ℕ`
 * @typeParam A - The dividend.
 * @typeParam B - The divisor.
 * @group Math
 * @example
 * ```
 * type Ex1 = Modulo<3, 2> // 1
 * type Ex2 = Modulo<4, 2> // 0
 * ```
 */
export type Modulo<A extends number, B extends number> =
  And<IsNatural<A>, IsNatural<B>> extends true
    ? IsLessThan<A, B> extends true
      ? A
      : Modulo<Subtract<A, B>, B>
    : number
