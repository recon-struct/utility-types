import type { AnyArray } from '~/any/any-array'
import type { IsExtension } from '~/extension/antecedent/is-extension'
import type { Indices } from '~/tuple/indices'

/**
 * If `B extends IndexOf<A>` then `true` else `false`
 * @typeParam A - The tuple to check.
 * @group Antecedent
 * @group Tuple
 * @example
 * ```
 * type Ex1 = IsIndexOf<[1, 2, 3], 2> // true
 * type Ex2 = IsIndexOf<[], 1>        // false
 * ```
 */
export type IsIndexOf<A extends AnyArray, B extends number> = IsExtension<
  `${B}`,
  Indices<A>
>
