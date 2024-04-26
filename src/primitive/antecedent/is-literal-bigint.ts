import type { IsExtensionAndNotEqual } from './util'

/**
 * Checks if the given type `A` is a literal bigint.
 * @typeParam A - The type to check.
 * @group Antecedent
 * @group Primitives
 * @example
 * ```
 * type Ex1 = IsLiteralBigint<1n>     // true
 * type Ex2 = IsLiteralBigint<bigint> // false
 * type Ex3 = IsLiteralBigint<1>      // false
 * type Ex4 = IsLiteralBigint<number> // false
 * ```
 */
export type IsLiteralBigint<A> = IsExtensionAndNotEqual<A, bigint>
