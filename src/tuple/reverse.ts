import type { AnyArray } from '~/any/any-array'
import type { Options } from '~/helper/options'

export interface ReverseOpts<A extends AnyArray = AnyArray>
  extends Options<'Reverse'> {
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
