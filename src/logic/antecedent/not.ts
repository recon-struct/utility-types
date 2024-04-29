import type { PureIf } from '~/helpers/pure-if'
import type { IsTrue } from './is-true'

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
export type Not<A extends boolean> = PureIf<IsTrue<A>, false, true>
