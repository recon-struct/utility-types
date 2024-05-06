import type { IsExtensionAndNotEqual } from './util'

/**
 * Checks if the given type `A` is a literal string.
 * @typeParam A - The type to check.
 * @group Antecedent
 * @group Literal
 * @example
 * ```
 * type Ex1 = IsLiteralString<'Hello'> // true
 * type Ex2 = IsLiteralString<string>  // false
 * ```
 */
export type IsLiteralString<A> = IsExtensionAndNotEqual<A, string>
