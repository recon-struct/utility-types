import type { IsNever } from '~/any/antecedent/is-never'
import type { AnyFalsy } from '~/any/any-falsy'

/**
 * If `A extends AnyFalsy` then `false` else `true`
 * @group Antecedent
 * @group Any
 * @example
 * ```
 * type Ex1 = IsTruthy<true>       // true
 * type Ex2 = IsTruthy<1>          // true
 * type Ex3 = IsTruthy<'abc'>      // true
 * type Ex4 = IsTruthy<[]>         // true
 * type Ex5 = IsTruthy<{}>         // true
 * type Ex6 = IsTruthy<false>      // false
 * type Ex7 = IsTruthy<''>         // false
 * type Ex8 = IsTruthy<0>          // false
 * type Ex9 = IsTruthy<null>       // false
 * type Ex10 = IsTruthy<undefined> // false
 * ```
 */
// export type IsTruthy<A> = IsFalsy<A> extends true ? false : true
export type IsTruthy<A> =
  IsNever<A> extends true ? false : A extends AnyFalsy ? false : true
