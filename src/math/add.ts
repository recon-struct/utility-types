import type { And } from '~/logic/antecedent/and'
import type { If } from '~/logic/if'
import type { IsNatural } from '~/math/antecedent/is-natural'
import type { LengthProp } from '~/object/length-prop'
import type { Tuple } from '~/tuple/tuple'

/**
 * Evaluate `A + B`, where `A ∈ ℕ` and `B ∈ ℕ`.
 * @typeParam A - The first number.
 * @typeParam B - The second number.
 * @group Math
 * @example
 * ```
 * type Ex1 = Add<1, 2> // 3
 * type Ex2 = Add<0, 5> // 5
 * ```
 */
export type Add<A extends number, B extends number> = If<
  And<IsNatural<A>, IsNatural<B>>,
  [...Tuple<A>, ...Tuple<B>] extends [...infer C] ? LengthProp<C> : number,
  number
>
