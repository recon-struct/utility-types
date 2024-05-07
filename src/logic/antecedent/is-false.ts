import type { IsEqual } from '~/any'

/**
 * Checks if the given type `A` is `false`.
 *
 * @typeParam A - The type to check.
 * @returns `true` if `A` is `false`, `false` otherwise.
 */
export type IsFalse<A extends boolean> = IsEqual<A, false>
