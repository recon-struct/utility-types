import type { Arity1 } from '~/function/arity/arity-1'
import type { Arity2 } from '~/function/arity/arity-2'
import type { Arity3 } from '~/function/arity/arity-3'
import type { Arity4 } from '~/function/arity/arity-4'
import type { Arity5 } from '~/function/arity/arity-5'
import type { Arity6 } from '~/function/arity/arity-6'
import type { Arity7 } from '~/function/arity/arity-7'
import type { Arity8 } from '~/function/arity/arity-8'
import type { PartApp1 } from '~/function/part-app/part-app-1'
import type { PartApp2 } from '~/function/part-app/part-app-2'
import type { PartApp3 } from '~/function/part-app/part-app-3'
import type { PartApp4 } from '~/function/part-app/part-app-4'
import type { PartApp5 } from '~/function/part-app/part-app-5'
import type { PartApp6 } from '~/function/part-app/part-app-6'
import type { PartApp7 } from '~/function/part-app/part-app-7'

/**
 * Represents a type that is a composition of function types with varying arities.
 * The type `PartApp8` combines the function types with arities ranging from 1 to 8.
 * It allows partial application of arguments, where the remaining arguments are wrapped in function types.
 *
 * @typeParam A - The type of the first argument.
 * @typeParam B - The type of the second argument.
 * @typeParam C - The type of the third argument.
 * @typeParam D - The type of the fourth argument.
 * @typeParam E - The type of the fifth argument.
 * @typeParam F - The type of the sixth argument.
 * @typeParam G - The type of the seventh argument.
 * @typeParam H - The type of the eighth argument.
 * @typeParam I - The type of the return value.
 * @group Function
 */
export type PartApp8<
  A = any,
  B = any,
  C = any,
  D = any,
  E = any,
  F = any,
  G = any,
  H = any,
  I = any,
> =
  | Arity8<A, B, C, D, E, F, G, H, I>
  | Arity7<A, B, C, D, E, F, G, PartApp1<H, I>>
  | Arity6<A, B, C, D, E, F, PartApp2<G, H, I>>
  | Arity5<A, B, C, D, E, PartApp3<F, G, H, I>>
  | Arity4<A, B, C, D, PartApp4<E, F, G, H, I>>
  | Arity3<A, B, C, PartApp5<D, E, F, G, H, I>>
  | Arity2<A, B, PartApp6<C, D, E, F, G, H, I>>
  | Arity1<A, PartApp7<B, C, D, E, F, G, H, I>>
