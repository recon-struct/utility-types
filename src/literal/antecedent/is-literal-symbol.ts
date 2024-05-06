import type { IsExtensionAndNotEqual } from './util'

/**
 * Checks if the given type `A` is a literal symbol.
 * @typeParam A - The type to check.
 * @group Antecedent
 * @group Literal
 * @example
 * ```
 * const MY_SYMBOL = Symbol()
 *
 * type Ex1 = IsLiteralSymbol<typeof MY_SYMBOL> // true
 * type Ex2 = IsLiteralSymbol<symbol>           // false
 * ```
 */
export type IsLiteralSymbol<A> = IsExtensionAndNotEqual<A, symbol>
