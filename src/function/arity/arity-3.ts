/**
 * Represents a function with three parameters.
 * @typeParam A - The type of the first parameter.
 * @typeParam B - The type of the second parameter.
 * @typeParam C - The type of the third parameter.
 * @typeParam D - The return type of the function.
 * @group Function
 */
export interface Arity3<A = any, B = any, C = any, D = any> {
  (a: A, b: B, c: C): D
}
