import type { Arity1 } from '../arity/arity-1'
import type { Arity2 } from '../arity/arity-2'
import type { PartApp1 } from './part-app-1'

/**
 * Represents a function that takes two arguments and returns a function that takes one argument.
 * @typeParam A - The first argument type.
 * @typeParam B - The second argument type.
 * @typeParam C - The type of the return value.
 * @group Function
 */
export type PartApp2<A = any, B = any, C = any> = Arity2<A, B, C> &
  Arity1<A, PartApp1<B, C>>
