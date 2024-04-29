import type { IsExtension } from './is-extension'

/**
 * Checks if the given type `A` is `never`.
 * @typeParam A - The type to check.
 * @group Antecedent
 * @group Any
 * @example
 * ```
 * type Ex1 = IsNever<never>  // true
 * type Ex2 = IsNever<null>   // false
 * ```
 */
export type IsNever<A> = IsExtension<[A], [never]>
