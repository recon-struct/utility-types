import type { AnyArray } from '../any/any-array'
import type { Internal } from '../helpers/internal'

/**
 * # 🚫 DO NOT EXPORT
 */
interface ReverseOpts<A extends AnyArray = AnyArray> extends Internal {
  value: A
}

/**
 * Reverse the elements of `A`
 * @group Tuple
 * @example
 * ```
 * type Ex = Reverse<[1, 2, 3, 4]> // [4, 3, 2, 1]
 * ```
 */
export type Reverse<
  A extends AnyArray,
  Z extends ReverseOpts = ReverseOpts<[]>,
> = A extends [...infer B, infer C]
  ? Reverse<B, ReverseOpts<[...Z['value'], C]>>
  : Z['value']
