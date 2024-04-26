import type { One } from '../identity'
import type { Add } from './add'
import type { IsNatural } from './antecedent/is-natural'

/**
 * Evaluate `A + 1`, where `A ∈ ℕ`
 * @typeParam A - The number to increment.
 * @group Math
 * @example
 * ```
 * type Ex1 = Decrement<2> // 1
 * type Ex2 = Decrement<0> // number
 * ```
 */
export type Increment<A extends number> =
  IsNatural<A> extends true ? Add<A, One> : number
