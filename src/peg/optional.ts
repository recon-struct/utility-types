/**
 * Type representing Parsing Expression Grammar (PEG) optional operation.
 * @typeParam A - The string to match optionally.
 * @typeParam B - The sequence of strings to match.
 * @experimental
 */
export type Optional<
  A extends string,
  B extends string,
> = B extends `${A}${infer C}` ? C : B
