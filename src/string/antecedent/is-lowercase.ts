import type { IsExtension } from '~/extension/antecedent/is-extension'

/**
 * If `A` is lowercase then `true` else `false`
 * @typeParam A - The string to check.
 * @group Antecedent
 * @group String
 * @example
 * ```
 * type Ex1 = IsLowercase<'Hello'> // true
 * type Ex2 = IsLowercase<'hello'> // false
 * type Ex3 = IsLowercase<'?'>     // false
 * ```
 */
export type IsLowercase<A extends string> = IsExtension<A, Lowercase<A>>
