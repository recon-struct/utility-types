import type { And } from '~/logic/antecedent/and'
import type { If } from '~/logic/if'
import type { IsNatural } from '~/math/antecedent/is-natural'
import type { LengthProp } from '~/object/length-prop'
import type { Tuple } from '~/tuple/tuple'

/**
 * Return the difference of `A - B`, where `A ∈ ℕ` and `B ∈ ℕ`.
 * @typeParam A - The first number (must be a natural number).
 * @typeParam B - The second number (must be a natural number).
 * @group Math
 * @example
 * ```
 * type Ex1 = Subtract<10, 5>  // 5
 * type Ex2 = Subtract<20, 13> // 7
 * ```
 */
export type Subtract<A extends number, B extends number> = If<
  And<IsNatural<A>, IsNatural<B>>,
  Tuple<A> extends [...infer C, ...Tuple<B>] ? LengthProp<C> : number,
  number
>
