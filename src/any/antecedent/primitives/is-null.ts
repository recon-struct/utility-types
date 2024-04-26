import type { IsExtension } from '../is-extension'

/**
 * If `A extends null` then `true` else `false`
 * @group Antecedent
 * @group Any
 * @example
 * ```
 * type Ex1 = IsNull<null>  // true
 * type Ex2 = IsNull<false> // false
 * ```
 */
export type IsNull<A> = IsExtension<A, null>
