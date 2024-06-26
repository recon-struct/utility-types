import type { IsNever } from '~/any/antecedent/is-never'
import type { LastUniqueInUnion } from '~/helper/last-unique-in-union'
import type { Increment } from '~/math/increment'
import type { Options } from './options'

export interface UnionUniqueLengthOpts<A extends number = number>
  extends Options<'UnionUniqueLength'> {
  value: A
}

/**
 * Calculates the length of a union type with unique elements.
 *
 * @typeParam A - The union type to calculate the length of.
 * @internal
 * @group Helper
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
