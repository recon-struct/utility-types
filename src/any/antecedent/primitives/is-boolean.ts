import type { IsExtension } from '../is-extension'

/**
 * If `A extends boolean` then `true` else `false`
 * @group Antecedent
 * @group Any
 * @example
 * ```
 * type Ex1 = IsBoolean<true | false> // true
 * type Ex2 = IsBoolean<string | number> // false
 * ```
 */
export type IsBoolean<A> = IsExtension<A, boolean>
