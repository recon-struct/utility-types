import type { IsTrue } from '~/logic/antecedent/is-true'

/**
 * If `A extends true` then `B` else `C`
 * @group Logic
 * @example
 * ```
 * type Ex1 = If<true>            // true
 * type Ex2 = If<false>           // false
 * type Ex3 = If<true, 'a', 'b'>  // 'a'
 * type Ex4 = If<false, 'a', 'b'> // 'b'
 * ```
 */
export type If<A extends boolean, B = A, C = A> = IsTrue<A> extends true ? B : C
