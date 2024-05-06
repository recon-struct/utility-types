import type { IsExtensionAndNotEqual } from './util'

/**
 * Checks if the given type `A` is a literal bigint.
 * @typeParam A - The type to check.
 * @group Antecedent
 * @group Literal
 * @example
 * ```
 * type Ex1 = IsLiteralBigInt<1n>     // true
 * type Ex2 = IsLiteralBigInt<bigint> // false
 * type Ex3 = IsLiteralBigInt<1>      // false
 * type Ex4 = IsLiteralBigInt<number> // false
 * ```
 */
export type IsLiteralBigInt<A> = IsExtensionAndNotEqual<A, bigint>
