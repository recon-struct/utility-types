import type { IsEqual } from '~/any/antecedent'

/**
 * Checks if the given type `A` is a literal null.
 * @typeParam A - The type to check.
 * @group Antecedent
 * @group Literal
 * @example
 * ```
 * type Ex1 = IsLiteralNull<null> // true
 * type Ex2 = IsLiteralNull<undefined> // false
 * type Ex3 = IsLiteralNull<void> // false
 * type Ex4 = IsLiteralNull<never> // false
 * ```
 */
export type IsLiteralNull<A> = IsEqual<A, null>
