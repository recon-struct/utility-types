/**
 * Represents a function with two parameters.
 * @typeParam A - The type of the first parameter.
 * @typeParam B - The type of the second parameter.
 * @typeParam C - The return type of the function.
 * @group Function
 */
export interface Arity2<A = any, B = any, C = any> {
  (a: A, b: B): C
}
