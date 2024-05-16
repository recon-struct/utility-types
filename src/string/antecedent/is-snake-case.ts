import type { AnyAlphabetic } from '~/any/any-alphabetic'
import type { AnyDecimalDigit } from '~/any/any-decimal-digit'

interface IsSnakeCaseOpts<A extends string = string> {
  value: A
}

/**
 * Checks if a given string is snake_case.
 *
 * @typeParam A - The input string to check.
 * @typeParam B - Optional configuration options for the snake_case check.
 * @group Antecedent
 * @group String
 */
export type IsSnakeCase<
  A extends string,
  B extends IsSnakeCaseOpts = IsSnakeCaseOpts<''>,
> = A extends `${infer C}${infer D}`
  ? C extends '_'
    ? B['value'] extends ''
      ? false
      : D extends ''
        ? false
        : IsSnakeCase<D, IsSnakeCaseOpts<`${B['value']}${C}`>>
    : C extends AnyAlphabetic | `${AnyDecimalDigit}`
      ? IsSnakeCase<D, IsSnakeCaseOpts<`${B['value']}${C}`>>
      : false
  : B['value'] extends ''
    ? false
    : true
