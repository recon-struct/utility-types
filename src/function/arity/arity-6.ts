/**
 * Represents a function with an arity of 6.
 * @typeParam A - The type of the first parameter.
 * @typeParam B - The type of the second parameter.
 * @typeParam C - The type of the third parameter.
 * @typeParam D - The type of the fourth parameter.
 * @typeParam E - The type of the fifth parameter.
 * @typeParam F - The type of the sixth parameter.
 * @typeParam G - The return type of the function.
 * @group Function
 */
export interface Arity6<
  A = any,
  B = any,
  C = any,
  D = any,
  E = any,
  F = any,
  G = any,
> {
  (a: A, b: B, c: C, d: D, e: E, f: F): G
}
