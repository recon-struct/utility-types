import type { AnyArray } from '~/any/any-array'
import type { Internal } from '~/helpers/internal'
import type { And } from '~/logic/antecedent/and'
import type { Or } from '~/logic/antecedent/or'
import type { If } from '~/logic/if'
import type { Absolute } from '~/math/absolute'
import type { Add } from '~/math/add'
import type { IsLessThan } from '~/math/antecedent/is-less-than'
import type { IsLessThanOrEqual } from '~/math/antecedent/is-less-than-or-equal'
import type { IsNegative } from '~/math/antecedent/is-negative'
import type { Subtract } from '~/math/subtract'
import type { LengthProp } from '~/object/length-prop'
import type { Override } from '~/object/override'

/**
 * # 🚫 DO NOT EXPORT
 * @internal
 */
interface SliceOpts<
  A extends AnyArray = AnyArray,
  B extends number = number,
  C extends number = number,
  D extends number = number,
> extends Internal {
  value: A
  startIndex: B
  endIndex: C
  length: D
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
 * type Ex3 = Slice<[1, 2, 3], 1, -1>      // [2]
 * type Ex4 = Slice<[1, 2, 3], 1, -1>      // [2]
 * ```
 */
export type Slice<
  A extends AnyArray,
  B extends number = 0,
  C extends number = LengthProp<A>,
  D extends SliceOpts = SliceOpts<
    [],
    If<IsNegative<B>, Subtract<LengthProp<A>, Absolute<B>>, B>,
    If<IsNegative<C>, Subtract<LengthProp<A>, Absolute<C>>, C>,
    Subtract<
      If<IsNegative<C>, Subtract<LengthProp<A>, Absolute<C>>, C>,
      If<IsNegative<B>, Subtract<LengthProp<A>, Absolute<B>>, B>
    >
  >,
> =
  And<
    Or<IsNegative<D['startIndex']>, IsNegative<D['endIndex']>>,
    IsLessThanOrEqual<D['endIndex'], D['startIndex']>
  > extends true
    ? []
    : IsLessThan<LengthProp<D['value']>, D['length']> extends true
      ? Slice<
          A,
          B,
          C,
          Override<
            D,
            {
              value: [
                ...D['value'],
                A[Add<LengthProp<D['value']>, D['startIndex']>],
              ]
            }
          >
        >
      : D['value']
