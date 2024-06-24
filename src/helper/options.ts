/**
 * @internal
 */
declare const OptionType: unique symbol

/**
 * Represents the type of an option.
 *
 * @internal
 */
type OptionType = typeof OptionType

/**
 * Represents a set of options with a generic type parameter.
 *
 * @template A - The type of the options.
 */
export interface Options<A extends string> {
  [OptionType]: A
}
