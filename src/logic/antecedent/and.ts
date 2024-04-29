import type { If } from '~/helpers/if'
import type { IsTrue } from './is-true'

/**
 * Evaluate `A ∧ B`
 * @group Antecedent
 * @group Logic
 * @example
 * ```
 * type Ex1 = And<true, true>   // true
 * type Ex2 = And<true, false>  // false
 * type Ex3 = And<false, true>  // false
 * type Ex4 = And<false, false> // false
 * ```
 */
export type And<A extends boolean, B extends boolean> = If<IsTrue<A>, IsTrue<B>>
