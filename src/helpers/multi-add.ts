import type { Or } from '~/logic/antecedent/or'
import type { IsZero } from '../identity/antecedent/is-num-add-identity'
import type { Add } from '../math/add'
import type { Decrement } from '../math/decrement'

/**
 * @internal
 */
export interface MultiAddOpts<A extends number = number> {
  value: A
}

/**
 * Repeated addition utility function used in multiplication
 * @typeParam A - The first number.
 * @typeParam B - The second number.
 * @typeParam C - The accumulator.
 * @internal
 */
export type MultiAdd<
  A extends number,
  B extends number,
  C extends MultiAddOpts = MultiAddOpts<0>,
> =
  Or<IsZero<A>, IsZero<B>> extends true
    ? C['value']
    : MultiAdd<A, Decrement<B>, MultiAddOpts<Add<A, C['value']>>>
