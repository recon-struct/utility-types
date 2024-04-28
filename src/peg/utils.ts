/**
 * Extracts the remaining part of a string after a specified prefix.
 * @typeParam A - The prefix string.
 * @typeParam B - The input string.
 * @returns The remaining part of the input string after the prefix, or `never` if the prefix is not found.
 */
export type Consume<
  A extends string,
  B extends string,
> = B extends `${A}${infer C}` ? C : never
