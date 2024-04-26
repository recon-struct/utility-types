import type { Increment } from '../math'
import type { IsLiteralNever } from '../primitive/antecedent/is-literal-never'
import type { Internal } from '../helpers/internal'
import type { LastUniqueInUnion } from './helpers/last-unique-in-union'

/**
 * # 🚫 DO NOT EXPORT
 */
interface Opts<A extends number = number> extends Internal {
  value: A
}

/**
 * Calculates the length of a union type with unique elements.
 *
 * @typeParam A - The union type to calculate the length of.
 * @group Type Set
 * @example
 * ```
 * type Ex1 = UnionUniqueLength<'a' | 'b' | 'a' | 'c'> // 3
 * type Ex2 = UnionUniqueLength<1 | 2 | 1 | 3>         // 3
 * ```
 */
export type UnionUniqueLength<A, B extends Opts = Opts<0>> =
  IsLiteralNever<LastUniqueInUnion<A>> extends true
    ? B['value']
    : UnionUniqueLength<
        Exclude<A, LastUniqueInUnion<A>>,
        Opts<Increment<B['value']>>
      >
