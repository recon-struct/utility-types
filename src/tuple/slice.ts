import type { AnyArray } from '../any/any-array'
import type { Internal } from '../helpers/internal'
import type { Add } from '../math/add'
import type { IsLessThan } from '../math/antecedent/is-less-than'
import type { LengthProp } from '../object/length-prop'

/**
 * # 🚫 DO NOT EXPORT
 * @internal
 */
interface Opts<A extends AnyArray = AnyArray> extends Internal {
  value: A
}

/**
 * Return a slice of a tuple starting at index `A` ending at index `B`
 * @typeParam A - The tuple to slice.
 * @typeParam B - The starting index.
 * @typeParam C - The ending index.
 * @group Tuple
 * @example
 * ```
 * type Ex1 = Slice<[1, 2, 3], 1>          // [2, 3]
 * type Ex2 = Slice<['a', 'b', 'c'], 1, 2> // ['b']
 * ```
 */
export type Slice<
  A extends AnyArray,
  B extends number = 0,
  C extends number = LengthProp<A>,
  D extends Opts = Opts<[]>,
> =
  IsLessThan<B, LengthProp<A>> extends true
    ? IsLessThan<Add<B, LengthProp<D['value']>>, C> extends true
      ? IsLessThan<Add<B, LengthProp<D['value']>>, LengthProp<A>> extends true
        ? Slice<
            A,
            B,
            C,
            Opts<[...D['value'], A[Add<B, LengthProp<D['value']>>]]>
          >
        : D['value']
      : D['value']
    : []
