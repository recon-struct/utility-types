import type { AnyDecimalDigit } from '~/any/any-decimal-digit'
import type { IsEqual } from '~/extension/antecedent/is-equal'

interface IsNumericOpts<A extends string = string> {
  value: A
}

/**
 * Checks if a given string is numeric.
 * @typeParam A - The input string to check.
 * @typeParam B - Optional configuration options for the numeric check.
 * @group Antecedent
 * @group String
 */
export type IsNumeric<
  A extends string,
  B extends IsNumericOpts = IsNumericOpts<''>,
> = A extends `${infer C}${infer D}`
  ? C extends `${AnyDecimalDigit}`
    ? IsEqual<A, ''> extends true
      ? true
      : IsNumeric<D, IsNumericOpts<`${B['value']}${C}`>>
    : false
  : B['value'] extends ''
    ? false
    : true
