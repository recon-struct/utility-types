/**
 * Represents a function with four parameters.
 * @typeParam A - The type of the first parameter.
 * @typeParam B - The type of the second parameter.
 * @typeParam C - The type of the third parameter.
 * @typeParam D - The type of the fourth parameter.
 * @typeParam E - The return type of the function.
 * @group Function
 */
export interface Arity4<A = any, B = any, C = any, D = any, E = any> {
  (a: A, b: B, c: C, d: D): E
}
