import type { Arity1 } from '~/function/arity/arity-1'
import type { Arity2 } from '~/function/arity/arity-2'
import type { Arity3 } from '~/function/arity/arity-3'
import type { PartApp1 } from '~/function/part-app/part-app-1'
import type { PartApp2 } from '~/function/part-app/part-app-2'

/**
 * Represents a type that partially applies arguments to a function with 3 parameters.
 * @typeParam A - The type of the first argument.
 * @typeParam B - The type of the second argument.
 * @typeParam C - The type of the third argument.
 * @typeParam D - The type of the return value.
 * @group Function
 */
export type PartApp3<A = any, B = any, C = any, D = any> =
  | Arity3<A, B, C, D>
  | Arity2<A, B, PartApp1<C, D>>
  | Arity1<A, PartApp2<B, C, D>>
