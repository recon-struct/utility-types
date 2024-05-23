import type { IsEqual } from '~/any'

/**
 * Checks if the given type `A` is `false`.
 *
 * @typeParam A - The type to check.
 * @group Antecedent
 * @group Logic
 * @example
 * ```
 * type Ex1 = IsFalse<false> // true
 * type Ex2 = IsFalse<true>  // false
 * ```
 */
export type IsFalse<A extends boolean> = IsEqual<A, false>
