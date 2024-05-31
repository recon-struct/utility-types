/**
 * Checks if the given value is a floating-point number.
 * @typeParam A The type of the value to check.
 */
export type IsFloat<A extends number> = `${A}` extends `${number}.${number}`
  ? true
  : false
