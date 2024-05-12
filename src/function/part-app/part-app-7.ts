import type { Arity1 } from '~/function/arity/arity-1'
import type { Arity2 } from '~/function/arity/arity-2'
import type { Arity3 } from '~/function/arity/arity-3'
import type { Arity4 } from '~/function/arity/arity-4'
import type { Arity5 } from '~/function/arity/arity-5'
import type { Arity6 } from '~/function/arity/arity-6'
import type { Arity7 } from '~/function/arity/arity-7'
import type { PartApp1 } from '~/function/part-app/part-app-1'
import type { PartApp2 } from '~/function/part-app/part-app-2'
import type { PartApp3 } from '~/function/part-app/part-app-3'
import type { PartApp4 } from '~/function/part-app/part-app-4'
import type { PartApp5 } from '~/function/part-app/part-app-5'
import type { PartApp6 } from '~/function/part-app/part-app-6'

/**
 * Represents a function type that has 7 parameters and can be partially applied.
 * @typeParam A - The type of the first parameter.
 * @typeParam B - The type of the second parameter.
 * @typeParam C - The type of the third parameter.
 * @typeParam D - The type of the fourth parameter.
 * @typeParam E - The type of the fifth parameter.
 * @typeParam F - The type of the sixth parameter.
 * @typeParam G - The type of the seventh parameter.
 * @typeParam H - The type of the return value.
 * @group Function
 */
export type PartApp7<
  A = any,
  B = any,
  C = any,
  D = any,
  E = any,
  F = any,
  G = any,
  H = any,
> = Arity7<A, B, C, D, E, F, G, H> &
  Arity6<A, B, C, D, E, F, PartApp1<G, H>> &
  Arity5<A, B, C, D, E, PartApp2<F, G, H>> &
  Arity4<A, B, C, D, PartApp3<E, F, G, H>> &
  Arity3<A, B, C, PartApp4<D, E, F, G, H>> &
  Arity2<A, B, PartApp5<C, D, E, F, G, H>> &
  Arity1<A, PartApp6<B, C, D, E, F, G, H>>
