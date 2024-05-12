import type { Arity1 } from '~/function/arity/arity-1'
import type { Arity2 } from '~/function/arity/arity-2'
import type { Arity3 } from '~/function/arity/arity-3'
import type { Arity4 } from '~/function/arity/arity-4'
import type { Arity5 } from '~/function/arity/arity-5'
import type { PartApp1 } from '~/function/part-app/part-app-1'
import type { PartApp2 } from '~/function/part-app/part-app-2'
import type { PartApp3 } from '~/function/part-app/part-app-3'
import type { PartApp4 } from '~/function/part-app/part-app-4'

/**
 * Represents a utility type that combines multiple arity functions with partial application.
 * @typeParam A - The type of the first argument.
 * @typeParam B - The type of the second argument.
 * @typeParam C - The type of the third argument.
 * @typeParam D - The type of the fourth argument.
 * @typeParam E - The type of the fifth argument.
 * @typeParam F - The type of the return value.
 * @group Function
 */
export type PartApp5<
  A = any,
  B = any,
  C = any,
  D = any,
  E = any,
  F = any,
> = Arity5<A, B, C, D, E, F> &
  Arity4<A, B, C, D, PartApp1<E, F>> &
  Arity3<A, B, C, PartApp2<D, E, F>> &
  Arity2<A, B, PartApp3<C, D, E, F>> &
  Arity1<A, PartApp4<B, C, D, E, F>>
