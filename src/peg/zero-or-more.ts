/**
 * Type representing Parsing Expression Grammar (PEG) zero-or-more operation.
 * @typeParam A - The string to match zero or more times.
 * @typeParam B - The sequence of strings to match.
 * @experimental
 */
export type ZeroOrMore<
  A extends string,
  B extends string,
> = B extends `${A}${infer C}` ? ZeroOrMore<A, C> : B
