/**
 * Represents a function with one parameter.
 * @typeParam A - The type of the parameter.
 * @typeParam B - The return type of the function.
 * @group Function
 */
export interface Arity1<A = any, B = any> {
  (a: A): B
}
