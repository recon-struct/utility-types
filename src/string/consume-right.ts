/**
 * Extracts the remaining part of a string `B` after consuming the prefix `A`.
 * @typeParam A - The prefix string.
 * @typeParam B - The input string.
 * @group String
 */
export type ConsumeRight<
  A extends string,
  B extends string,
> = B extends `${A}${infer C}` ? C : never
