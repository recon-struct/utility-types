import type { IsLiteralNumber } from './is-literal-number'
import type { IsLiteralString } from './is-literal-string'
import type { IsLiteralSymbol } from './is-literal-symbol'

/**
 * Checks if the type `A` is a literal key such as could index an object.
 * @typeParam A - The type to check.
 * @group Primitives
 * @example
 * ```
 * const MY_SYMBOL = Symbol()
 *
 * type Ex1 = IsLiteralKey<'a'>              // true
 * type Ex2 = IsLiteralKey<1>                // true
 * type Ex3 = IsLiteralKey<typeof MY_SYMBOL> // true
 * type Ex4 = IsLiteralKey<string>           // false
 * type Ex5 = IsLiteralKey<number>           // false
 * type Ex6 = IsLiteralKey<symbol>           // false
 * ```
 */
export type IsLiteralKey<A> = A extends any
  ? A extends string
    ? IsLiteralString<A>
    : A extends number
      ? IsLiteralNumber<A>
      : A extends symbol
        ? IsLiteralSymbol<A>
        : false
  : false
