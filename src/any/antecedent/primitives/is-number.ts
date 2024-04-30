import type { IsExtension } from '../is-extension'

/**
 * If `A extends number` then `true` else `false`
 * @group Antecedent
 * @group Any
 * @example
 * ```
 * type Ex1 = IsNumber<number> // true
 * type Ex2 = IsNumber<string> // false
 * ```
 */
export type IsNumber<A> = IsExtension<A, number>
