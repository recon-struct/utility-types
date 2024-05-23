import type { IsEqual } from '~/any'

/**
 * Checks if the given type `A` is equal to `true`.
 *
 * @typeParam A - The type to check.
 * @group Antecedent
 * @group Logic
 * @example
 * ```
 * type Ex1 = IsTrue<false> // false
 * type Ex2 = IsTrue<true>  // true
 * ```
 */
export type IsTrue<A extends boolean> = IsEqual<A, true>
