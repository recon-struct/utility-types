import type { If } from '~/logic/if'

/**
 * Evaluate `¬A`
 * @group Antecedent
 * @group Logic
 * @example
 * ```
 * type Ex1 = Not<true>  // false
 * type Ex2 = Not<false> // true
 * ```
 */
export type Not<A extends boolean> = If<A, false, true>
