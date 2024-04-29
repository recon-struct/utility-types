import type { IsEqual } from '../../any/antecedent/is-equal'

/**
 * Checks if the given type `A` is a literal void.
 * @typeParam A - The type to check.
 * @group Antecedent
 * @group Primitives
 * @example
 * ```
 * type Ex1 = IsLiteralVoid<void>      // true
 * type Ex2 = IsLiteralVoid<undefined> // false
 * type Ex3 = IsLiteralVoid<string>    // false
 * type Ex4 = IsLiteralVoid<never>     // false
 * ```
 */
export type IsLiteralVoid<A> = IsEqual<A, void>
