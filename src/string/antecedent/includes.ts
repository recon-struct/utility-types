import type { IsExtension } from '../../any/antecedent/is-extension'

/**
 * Check if the string `B` is in `A`
 * @typeParam A - The string to check.
 * @typeParam B - The string to search for.
 * @group Antecedent
 * @group String
 * @example
 * ```
 * type Ex1 = Includes<'book', 'oo'>   // true
 * type Ex2 = Includes<'apple', 'zzz'> // false
 * ```
 */
export type Includes<A extends string, B extends string> = IsExtension<
  A,
  `${string}${B}${string}`
>
