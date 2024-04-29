import type { Or } from '~/logic/antecedent/or'
import type { IsZero } from '../identity/antecedent/is-num-add-identity'
import type { Add } from '../math/add'
import type { Decrement } from '../math/decrement'

/**
 * # 🚫 DO NOT EXPORT FROM src/index.ts
 * Repeated addition utility function used in multiplication
 * @internal
 */
export type MultiAdd<A extends number, B extends number, C extends number = 0> =
  Or<IsZero<A>, IsZero<B>> extends true
    ? C
    : MultiAdd<A, Decrement<B>, Add<A, C>>
