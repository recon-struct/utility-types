import type { And } from '../logic/antecedent/and'
import type { LengthProp } from '../object/length-prop'
import type { Tuple } from '../tuple/tuple'
import type { IsNatural } from './antecedent/is-natural'

/**
 * Return the difference of `A - B`
 * @group Math
 * @example
 * ```
 * type Ex1 = Subtract<10, 5>  // 5
 * type Ex2 = Subtract<20, 13> // 7
 * ```
 */
export type Subtract<A extends number, B extends number> =
  And<IsNatural<A>, IsNatural<B>> extends true
    ? Tuple<A> extends [...infer C, ...Tuple<B>]
      ? LengthProp<C>
      : number
    : number
