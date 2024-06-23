import type { LengthProp } from '~/object/length-prop'

/**
 * Swaps two elements in an array.
 *
 * @typeParam A - The input array.
 * @typeParam B - The index of the first element to swap.
 * @typeParam C - The index of the second element to swap.
 * @typeParam D - The resulting array after swapping the elements.
 */
export type Swap<
  A extends any[],
  B extends number,
  C extends number,
  D extends any[] = [],
> =
  LengthProp<D> extends LengthProp<A>
    ? D
    : LengthProp<D> extends B
      ? Swap<A, B, C, [...D, A[C]]>
      : LengthProp<D> extends C
        ? Swap<A, B, C, [...D, A[B]]>
        : Swap<A, B, C, [...D, A[LengthProp<D>]]>
