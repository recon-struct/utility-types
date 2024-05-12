import type { One } from '~/identity/num-mult-identity'
import type { If } from '~/logic/if'
import type { Add } from '~/math/add'
import type { IsNatural } from '~/math/antecedent/is-natural'

/**
 * Evaluate `A + 1`, where `A ∈ ℕ`.
 * @typeParam A - The number to increment (must be a natural number).
 * @group Math
 * @example
 * ```
 * type Ex1 = Increment<1> // 3
 * type Ex2 = Increment<0> // 2
 * ```
 */
export type Increment<A extends number> = If<IsNatural<A>, Add<A, One>, number>
