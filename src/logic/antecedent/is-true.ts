import type { IsEqual } from '~/any'

/**
 * Checks if the given type `A` is equal to `true`.
 *
 * @typeParam A - The type to check.
 * @returns `true` if `A` is equal to `true`, `false` otherwise.
 */
export type IsTrue<A extends boolean> = IsEqual<A, true>
