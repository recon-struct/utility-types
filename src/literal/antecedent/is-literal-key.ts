import type { IsNever } from '~/any/antecedent/is-never'
import type { IsLiteralNumber } from '~/literal/antecedent/is-literal-number'
import type { IsLiteralString } from '~/literal/antecedent/is-literal-string'
import type { IsLiteralSymbol } from '~/literal/antecedent/is-literal-symbol'

/**
 * Checks if the type `A` is a literal key such as could index an object.
 * @typeParam A - The type to check.
 * @group Antecedent
 * @group Literal
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
export type IsLiteralKey<A> =
  IsNever<A> extends true
    ? false
    : A extends string
      ? IsLiteralString<A>
      : A extends number
        ? IsLiteralNumber<A>
        : A extends symbol
          ? IsLiteralSymbol<A>
          : false
