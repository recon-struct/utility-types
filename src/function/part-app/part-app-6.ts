import type { Arity1 } from '~/function/arity/arity-1'
import type { Arity2 } from '~/function/arity/arity-2'
import type { Arity3 } from '~/function/arity/arity-3'
import type { Arity4 } from '~/function/arity/arity-4'
import type { Arity5 } from '~/function/arity/arity-5'
import type { Arity6 } from '~/function/arity/arity-6'
import type { PartApp1 } from '~/function/part-app/part-app-1'
import type { PartApp2 } from '~/function/part-app/part-app-2'
import type { PartApp3 } from '~/function/part-app/part-app-3'
import type { PartApp4 } from '~/function/part-app/part-app-4'
import type { PartApp5 } from '~/function/part-app/part-app-5'

/**
 * Represents a type that is a composition of function types with up to 6 parameters.
 * It provides partial application capabilities for each parameter.
 * @typeParam A - The type of the first parameter.
 * @typeParam B - The type of the second parameter.
 * @typeParam C - The type of the third parameter.
 * @typeParam D - The type of the fourth parameter.
 * @typeParam E - The type of the fifth parameter.
 * @typeParam F - The type of the sixth parameter.
 * @typeParam G - The typeo of the return value.
 * @group Function
 */
export type PartApp6<
  A = any,
  B = any,
  C = any,
  D = any,
  E = any,
  F = any,
  G = any,
> = Arity6<A, B, C, D, E, F, G> &
  Arity5<A, B, C, D, E, PartApp1<F, G>> &
  Arity4<A, B, C, D, PartApp2<E, F, G>> &
  Arity3<A, B, C, PartApp3<D, E, F, G>> &
  Arity2<A, B, PartApp4<C, D, E, F, G>> &
  Arity1<A, PartApp5<B, C, D, E, F, G>>
