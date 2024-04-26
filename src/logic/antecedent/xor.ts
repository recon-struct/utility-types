import type { Not } from './not'

/**
 * Evaluate `A ⊻ B`
 * @group Antecedent
 * @group Logic
 * @example
 * ```
 * type Ex1 = Xor<true, true>   // false
 * type Ex2 = Xor<true, false>  // true
 * type Ex3 = Xor<false, true>  // true
 * type Ex4 = Xor<false, false> // false
 * ```
 */
export type Xor<A extends boolean, B extends boolean> = A extends true
  ? Not<B>
  : B
