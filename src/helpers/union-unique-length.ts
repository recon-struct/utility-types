import type { IsNever } from '~/any/antecedent/is-never'
import type { Increment } from '../math'
import type { LastUniqueInUnion } from './last-unique-in-union'

/**
 * @internal
 */
export interface UnionUniqueLengthOpts<A extends number = number> {
  value: A
}

/**
 * Calculates the length of a union type with unique elements.
 *
 * @typeParam A - The union type to calculate the length of.
 * @internal
 * @example
 * ```
 * type Ex1 = UnionUniqueLength<'a' | 'b' | 'a' | 'c'> // 3
 * type Ex2 = UnionUniqueLength<1 | 2 | 1 | 3>         // 3
 * ```
 */
export type UnionUniqueLength<
  A,
  B extends UnionUniqueLengthOpts = UnionUniqueLengthOpts<0>,
> =
  IsNever<LastUniqueInUnion<A>> extends true
    ? B['value']
    : UnionUniqueLength<
        Exclude<A, LastUniqueInUnion<A>>,
        UnionUniqueLengthOpts<Increment<B['value']>>
      >
