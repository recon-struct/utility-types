import type { IsExtension } from '~/extension/antecedent/is-extension'

/**
 * If `A` is uppercase then `true` else `false`
 * @typeParam A - The string to check.
 * @group Antecedent
 * @group String
 * @example
 * ```
 * type Ex1 = IsUppercase<'Hello'> // true
 * type Ex2 = IsUppercase<'hello'> // false
 * type Ex3 = IsUppercase<'?'>     // false
 * ```
 */
export type IsUpperCase<A extends string> = IsExtension<A, Uppercase<A>>
