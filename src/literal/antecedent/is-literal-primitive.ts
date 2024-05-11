import { IsNever } from '~/any/antecedent'
import type { IsLiteralBigInt } from './is-literal-bigint'
import { IsLiteralBoolean } from './is-literal-boolean'
import type { IsLiteralNull } from './is-literal-null'
import type { IsLiteralNumber } from './is-literal-number'
import type { IsLiteralString } from './is-literal-string'
import type { IsLiteralSymbol } from './is-literal-symbol'
import type { IsLiteralUndefined } from './is-literal-undefined'

/**
 * Checks if the given type `A` is a literal primitive.
 * @typeParam A - The type to check.
 * @group Antecedent
 * @group Literal
 * @privateRemarks TODO see why the boolean check is needed first
 * @example
 * ```
 * const MY_SYMBOL = Symbol()
 *
 * type Ex1 = IsLiteralPrimitive<'abc'>            // true
 * type Ex2 = IsLiteralPrimitive<1>                // true
 * type Ex3 = IsLiteralPrimitive<typeof MY_SYMBOL> // true
 * type Ex6 = IsLiteralPrimitive<1n>               // true
 * type Ex4 = IsLiteralPrimitive<null>             // true
 * type Ex5 = IsLiteralPrimitive<undefined>        // true
 * type Ex7 = IsLiteralPrimitive<string>           // false
 * type Ex8 = IsLiteralPrimitive<number>           // false
 * type Ex9 = IsLiteralPrimitive<symbol>           // false
 * type Ex10 = IsLiteralPrimitive<bigint>          // false
 * ```
 */
export type IsLiteralPrimitive<A> =
  IsLiteralBoolean<A> extends true
    ? true
    : IsNever<A> extends true
      ? false
      : A extends undefined
        ? IsLiteralUndefined<A>
        : A extends null
          ? IsLiteralNull<A>
          : A extends string
            ? IsLiteralString<A>
            : A extends number
              ? IsLiteralNumber<A>
              : A extends bigint
                ? IsLiteralBigInt<A>
                : A extends symbol
                  ? IsLiteralSymbol<A>
                  : false
