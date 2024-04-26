import type { IsLiteralBigint } from './is-literal-bigint'
import type { IsLiteralNull } from './is-literal-null'
import type { IsLiteralNumber } from './is-literal-number'
import type { IsLiteralString } from './is-literal-string'
import type { IsLiteralSymbol } from './is-literal-symbol'
import type { IsLiteralUndefined } from './is-literal-undefined'

/**
 * Checks if the given type `A` is a literal primitive.
 * @typeParam A - The type to check.
 * @group Antecedent
 * @group Primitives
 * @example
 * ```
 * const MY_SYMBOL = Symbol()
 *
 * type Ex1 = IsLiteralPrimitive<'abc'>            // true
 * type Ex2 = IsLiteralPrimitive<1>                // true
 * type Ex3 = IsLiteralPrimitive<typeof MY_SYMBOL> // true
 * type Ex4 = IsLiteralPrimitive<null>             // true
 * type Ex5 = IsLiteralPrimitive<undefined>        // true
 * type Ex6 = IsLiteralPrimitive<1n>               // false
 * type Ex7 = IsLiteralPrimitive<string>           // false
 * type Ex8 = IsLiteralPrimitive<number>           // false
 * type Ex9 = IsLiteralPrimitive<symbol>           // false
 * type Ex10 = IsLiteralPrimitive<bigint>          // false
 * ```
 */
export type IsLiteralPrimitive<A> = A extends any
  ? A extends string
    ? IsLiteralString<A>
    : A extends number
      ? IsLiteralNumber<A>
      : A extends symbol
        ? IsLiteralSymbol<A>
        : A extends null
          ? IsLiteralNull<A>
          : A extends undefined
            ? IsLiteralUndefined<A>
            : A extends bigint
              ? IsLiteralBigint<A>
              : false
  : false
