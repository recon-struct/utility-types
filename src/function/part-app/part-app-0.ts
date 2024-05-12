import type { Arity0 } from '~/function/arity'

/**
 * Represents a type that partially applies a function with zero arguments.
 * @typeParam A - The type of the return value.
 * @group Function
 */
export type PartApp0<A = any> = Arity0<A>
