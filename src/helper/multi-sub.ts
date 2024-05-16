import type { IsLessThan } from '~/math/antecedent/is-less-than'
import type { Increment } from '~/math/increment'
import type { Subtract } from '~/math/subtract'

export interface MultiSubOpts<A extends number = number> {
  value: A
}

/**
 * Repeated subtraction utility function used in division
 * @typeParam A - The first number.
 * @typeParam B - The second number.
 * @typeParam C - The accumulator.
 * @group Helper
 */
export type HelperMultiSub<
  A extends number,
  B extends number,
  C extends MultiSubOpts = MultiSubOpts<0>,
> =
  IsLessThan<A, B> extends true
    ? C['value']
    : HelperMultiSub<Subtract<A, B>, B, MultiSubOpts<Increment<C['value']>>>
