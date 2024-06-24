import type { AnyAlphabetic } from '~/any/any-alphabetic'
import type { AnyDecimalDigit } from '~/any/any-decimal-digit'
import type { Options } from '~/helper/options'
import type { LowerCase } from '~/string/lower-case'
import type { UpperCase } from '~/string/upper-case'

interface IsCamelCaseOpts<A extends string = string>
  extends Options<'IsCamelCase'> {
  value: A
}

/**
 * Checks if a given string is camelCase.
 * @typeParam A - The input string to check.
 * @typeParam B - Optional configuration options for the camelCase check.
 * @group Antecedent
 * @group String
 */
export type IsCamelCase<
  A extends string,
  B extends IsCamelCaseOpts = IsCamelCaseOpts<''>,
> = A extends `${infer C}${infer D}`
  ? C extends UpperCase<AnyAlphabetic> | `${AnyDecimalDigit}`
    ? B['value'] extends ''
      ? false
      : IsCamelCase<D, IsCamelCaseOpts<`${B['value']}${C}`>>
    : C extends LowerCase<AnyAlphabetic>
      ? IsCamelCase<D, IsCamelCaseOpts<`${B['value']}${C}`>>
      : false
  : B['value'] extends ''
    ? false
    : true
