import type { IsExtension } from '../../any/antecedent/is-extension'

/**
 * If `A extends undefined` then `true` else `false`
 * @group Antecedent
 * @group Primitives
 * @example
 * ```
 * type Ex1 = IsLiteralUndefined<undefined> // true
 * type Ex2 = IsLiteralUndefined<void>      // false
 * type Ex3 = IsLiteralUndefined<null>      // false
 * type Ex4 = IsLiteralUndefined<never>     // false
 * ```
 */
export type IsLiteralUndefined<A> = IsExtension<A, undefined>
