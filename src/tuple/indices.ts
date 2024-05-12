import type { AnyArray } from '~/any/any-array'

/**
 * Extract the indices from a tuple `A`
 * @typeParam A - The tuple to extract the indices from.
 * @group Tuple
 * @example
 * ```
 * type Ex = Indices<['a', 'b']> // '0' | '1'
 * ```
 */
export type Indices<A extends AnyArray> = {
  [B in keyof A]: B extends `${number}` ? B : never
}[number]
