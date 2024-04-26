import type { AnyArray } from '../any/any-array'
import type { Internal } from '../helpers/internal'
import type { LengthProp } from '../object/length-prop'

/**
 * # 🚫 DO NOT EXPORT
 */
interface Opts<A extends AnyArray = AnyArray> extends Internal {
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
  Z extends Opts = Opts<[]>,
> =
  LengthProp<Z['value']> extends A
    ? Z['value']
    : Tuple<A, B, Opts<[...Z['value'], B]>>
