import type { MultiAdd } from '../helpers/multi-add'
import type { And } from '../logic/antecedent/and'
import type { IsNatural } from './antecedent/is-natural'

/**
 * Return the product of `A * B`
 * @group Math
 * @example
 * ```
 * type Ex1 = Multiply<2, 3> // 6
 * type Ex2 = Multiply<5, 5> // 25
 * ```
 * */
export type Multiply<A extends number, B extends number> =
  And<IsNatural<A>, IsNatural<B>> extends true ? MultiAdd<A, B> : number
