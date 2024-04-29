import type { If } from '~/logic/if'
import type { MultiAdd } from '../helpers/multi-add'
import type { And } from '../logic/antecedent/and'
import type { IsNatural } from './antecedent/is-natural'

/**
 * Return the product of `A * B`, where `A ∈ ℕ` and `B ∈ ℕ`.
 * @typeParam A - The first number (must be a natural number).
 * @typeParam B - The second number (must be a natural number).
 * @group Math
 * @example
 * ```
 * type Ex0 = Multiply<0, 0> // 0
 * type Ex1 = Multiply<2, 3> // 6
 * type Ex2 = Multiply<5, 5> // 25
 * ```
 * */
export type Multiply<A extends number, B extends number> = If<
  And<IsNatural<A>, IsNatural<B>>,
  MultiAdd<A, B>,
  number
>
