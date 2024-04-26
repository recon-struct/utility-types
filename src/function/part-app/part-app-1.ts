import type { Arity1 } from '../arity/arity-1'

/**
 * Represents a type that combines a unary function with a curried unary
 * @typeParam A - The type of the function argument.
 * @typeParam B - The type of the return value.
 * @group Function
 */
export type PartApp1<A = any, B = any> = Arity1<A, B>
