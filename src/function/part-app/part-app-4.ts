import type { Arity1 } from '~/function/arity/arity-1'
import type { Arity2 } from '~/function/arity/arity-2'
import type { Arity3 } from '~/function/arity/arity-3'
import type { Arity4 } from '~/function/arity/arity-4'
import type { PartApp1 } from '~/function/part-app/part-app-1'
import type { PartApp2 } from '~/function/part-app/part-app-2'
import type { PartApp3 } from '~/function/part-app/part-app-3'

/**
 * Represents a function type that is partially applied with 4 arguments.
 * @typeParam A - The type of the first argument.
 * @typeParam B - The type of the second argument.
 * @typeParam C - The type of the third argument.
 * @typeParam D - The type of the fourth argument.
 * @typeParam E - The type of the return value.
 * @group Function
 */
export type PartApp4<A = any, B = any, C = any, D = any, E = any> =
  | Arity4<A, B, C, D, E>
  | Arity3<A, B, C, PartApp1<D, E>>
  | Arity2<A, B, PartApp2<C, D, E>>
  | Arity1<A, PartApp3<B, C, D, E>>
