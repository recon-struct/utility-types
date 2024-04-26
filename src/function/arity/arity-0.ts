/**
 * Represents a function with zero parameters that returns a value of type A.
 * @typeParam A - The return type of the function.
 * @group Function
 */
export interface Arity0<A = any> {
  (): A
}
