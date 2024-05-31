import type { BigIntAddIdentity } from '~/identity/bigint-add-identity'
import type { NumAddIdentity } from '~/identity/num-add-identity'

export type Zeroish = NumAddIdentity | BigIntAddIdentity

/**
 * Determines whether a number or bigint is zero.
 *
 * @typeParam A - The type of the input value.
 * @group Antecedent
 * @group Math
 */
export type IsZero<A extends number | bigint> = A extends Zeroish ? true : false
