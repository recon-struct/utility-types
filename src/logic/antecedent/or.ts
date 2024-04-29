import type { If } from '~/helpers/if'
import type { IsTrue } from './is-true'

/**
 * Evaluate `A ∨ B`
 * @group Antecedent
 * @group Logic
 * @example
 * ```
 * type Ex1 = Or<true, true>   // true
 * type Ex2 = Or<true, false>  // true
 * type Ex3 = Or<false, true>  // true
 * type Ex4 = Or<false, false> // false
 * ```
 */
export type Or<A extends boolean, B extends boolean> = If<
  IsTrue<A>,
  true,
  IsTrue<B>
>
