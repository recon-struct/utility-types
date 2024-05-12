import type { IsExtension } from '~/extension/antecedent/is-extension'

/**
 * If the string representation of `A` has a decimal then `true` else `false`
 * @typeParam A - The number to check.
 * @group Antecedent
 * @group Math
 * @example
 * ```
 * type Ex1 = IsFloat<1.2> // true
 * type Ex2 = IsFloat<3>   // false
 * ```
 */
export type IsFloat<A extends number> = IsExtension<
  `${A}`,
  | `${number}.${number}`
  | `${number}.${number}e${number}`
  | `${number}.${number}e+${number}`
  | `${number}.${number}e-${number}`
>
