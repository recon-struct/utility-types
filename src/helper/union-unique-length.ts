import type { IsNever } from '~/any/antecedent/is-never'
import type { HelperLastUniqueInUnion } from '~/helper/last-unique-in-union'
import type { Increment } from '~/math/increment'

export interface UnionUniqueLengthOpts<A extends number = number> {
  value: A
}

/**
 * Calculates the length of a union type with unique elements.
 *
 * @typeParam A - The union type to calculate the length of.
 * @example
 * ```
 * type Ex1 = UnionUniqueLength<'a' | 'b' | 'a' | 'c'> // 3
 * type Ex2 = UnionUniqueLength<1 | 2 | 1 | 3>         // 3
 * ```
 */
export type HelperUnionUniqueLength<
  A,
  B extends UnionUniqueLengthOpts = UnionUniqueLengthOpts<0>,
> =
  IsNever<HelperLastUniqueInUnion<A>> extends true
    ? B['value']
    : HelperUnionUniqueLength<
        Exclude<A, HelperLastUniqueInUnion<A>>,
        UnionUniqueLengthOpts<Increment<B['value']>>
      >
