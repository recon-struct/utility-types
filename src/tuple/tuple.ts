import type { AnyArray } from '../any/any-array'
import type { LengthProp } from '../object/length-prop'

/**
 * @internal
 */
export interface TupleOpts<A extends AnyArray = AnyArray> {
  value: A
}

/**
 * Create a tuple of length `A` with entries of type `B` (defaults to `any`)
 * @group Tuple
 * @example
 * ```
 * type Ex1 = AnyTuple<2>         // [any, any]
 * type Ex2 = AnyTuple<3, number> // [number, number, number]
 * ```
 */
export type Tuple<
  A extends number = number,
  B = any,
  Z extends TupleOpts = TupleOpts<[]>,
> =
  LengthProp<Z['value']> extends A
    ? Z['value']
    : Tuple<A, B, TupleOpts<[...Z['value'], B]>>
