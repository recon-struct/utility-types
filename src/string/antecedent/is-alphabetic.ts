import type { AnyAlphabetic } from '~/any/any-alphabetic'
import type { Options } from '~/helper/options'

interface IsAlphabeticOpts<A extends string = string>
  extends Options<'IsAlphabetic'> {
  value: A
}

/**
 * Checks if a given string is alphabetic.
 * @typeParam A - The input string to check.
 * @typeParam B - Optional configuration options for the alphabetic check.
 * @group Antecedent
 * @group String
 */
export type IsAlphabetic<
  A extends string,
  B extends IsAlphabeticOpts = IsAlphabeticOpts<''>,
> = A extends `${infer C}${infer D}`
  ? C extends AnyAlphabetic
    ? IsAlphabetic<D, IsAlphabeticOpts<`${B['value']}${C}`>>
    : false
  : B['value'] extends ''
    ? false
    : true
