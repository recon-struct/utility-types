import type { IsZero } from '~/identity/antecedent/is-num-add-identity'
import type { Not } from '~/logic/antecedent/not'
import type { Decrement } from '~/math/decrement'

/**
 * Evaluate `A < B`, where `A ∈ ℕ` and `B ∈ ℕ`
 * @typeParam A - The number to compare.
 * @typeParam B - The number to compare against.
 * @group Antecedent
 * @group Math
 * @example
 * ```
 * type Ex1 = IsLessThan<1, 3> // true
 * type Ex2 = IsLessThan<3, 1> // false
 * ```
 */
export type IsLessThan<A extends number, B extends number> =
  IsZero<A> extends true
    ? Not<IsZero<B>>
    : IsZero<B> extends true
      ? IsZero<A>
      : IsLessThan<Decrement<A>, Decrement<B>>
