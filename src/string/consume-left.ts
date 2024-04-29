/**
 * Extracts the portion of a string `B` that comes before the first occurrence
 * of string `A`.
 * @typeParam A - The string to search for.
 * @typeParam B - The input string.
 * @group String
 */
export type ConsumeLeft<
  A extends string,
  B extends string,
> = B extends `${infer C}${A}` ? C : never
