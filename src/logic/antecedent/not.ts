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
export type Not<A extends boolean> = A extends true ? false : true
