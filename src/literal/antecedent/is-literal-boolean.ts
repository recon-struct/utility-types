import type { IsExtensionAndNotEqual } from '../../helpers/is-extension-and-not-equal'

/**
 * Checks if the given type `A` is a literal boolean.
 * @typeParam A - The type to check.
 * @group Antecedent
 * @group Literal
 * @example
 * ```
 * type Ex1 = IsLiteralBoolean<true>    // true
 * type Ex2 = IsLiteralBoolean<boolean> // false
 * type Ex3 = IsLiteralBoolean<never>   // false
 * ```
 */
export type IsLiteralBoolean<A> = IsExtensionAndNotEqual<A, boolean>
