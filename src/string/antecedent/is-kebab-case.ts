import type { AnyAlphabetic } from '~/any/any-alphabetic'
import type { AnyDecimalDigit } from '~/any/any-decimal-digit'

interface IsKebabCaseOpts<A extends string = string> {
  value: A
}

/**
 * Checks if a given string is kebab-case.
 * @typeParam A - The input string to check.
 * @typeParam B - Optional configuration options for the kebab-case check.
 * @group Antecedent
 * @group String
 */
export type IsKebabCase<
  A extends string,
  B extends IsKebabCaseOpts = IsKebabCaseOpts<''>,
> = A extends `${infer C}${infer D}`
  ? C extends '-'
    ? B['value'] extends ''
      ? false
      : D extends ''
        ? false
        : IsKebabCase<D, IsKebabCaseOpts<`${B['value']}${C}`>>
    : C extends AnyAlphabetic | `${AnyDecimalDigit}`
      ? IsKebabCase<D, IsKebabCaseOpts<`${B['value']}${C}`>>
      : false
  : B['value'] extends ''
    ? false
    : true
