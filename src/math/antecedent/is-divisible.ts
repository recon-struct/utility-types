import type { IsZero } from '~/identity/antecedent/is-num-add-identity'
import type { IsLiteralNumber } from '~/literal/antecedent'
import type { And } from '~/logic/antecedent/and'
import type { Modulo } from '~/math/modulo'

/**
 * Evaluate `A % B === 0`, where `A ∈ ℕ` and `B ∈ ℕ`
 * @typeParam A - The dividend.
 * @typeParam B - The divisor.
 * @group Antecedent
 * @group Math
 * @example
 * ```
 * type Ex1 = IsDivisble<9, 3>   // true
 * type Ex2 = IsDivisible<11, 3> // false
 * ```
 */
export type IsDivisible<A extends number, B extends number> =
  And<IsLiteralNumber<A>, IsLiteralNumber<B>> extends true
    ? IsZero<Modulo<A, B>>
    : false
