import type { If } from '~/logic/if'
import type { IsNatural } from '~/math/antecedent/is-natural'
import type { ConsumeRight } from '~/string/consume-right'
import type { ToNaturalNumber } from '~/string/to-natural-number'

/**
 * Calculates the absolute value of `A`, where `A ∈ ℕ`.
 * @typeParam A - The input number.
 * @group Math
 * @experimental
 * @example
 * ```
 * type Ex1 = Absolute<0>    // 0
 * type Ex2 = Absolute<-0>   // 0
 * type Ex3 = Absolute<-1>   // 1
 * type Ex4 = Absolute<-100> // 100
 * type Ex5 = Absolute<100>  // 100
 * ```
 */
export type Absolute<A extends number> = If<
  IsNatural<A>,
  ToNaturalNumber<`${A}`>,
  ToNaturalNumber<ConsumeRight<'-', `${A}`>>
>
