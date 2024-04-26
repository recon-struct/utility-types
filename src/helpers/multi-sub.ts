import type { IsLessThan } from '../math/antecedent/is-less-than'
import type { Increment } from '../math/increment'
import type { Subtract } from '../math/subtract'

/**
 * # 🚫 DO NOT EXPORT FROM src/index.ts
 * Repeated subtraction utility function used in division
 * @internal
 */
export type MultiSub<
  A extends number,
  B extends number,
  C extends number = 0
> = IsLessThan<A, B> extends true
  ? C
  : MultiSub<Subtract<A, B>, B, Increment<C>>
