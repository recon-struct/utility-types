/**
 * Type represents Parsing Expression Grammar (PEG) and-predicate operation.
 * @typeParam A - The string to match.
 * @typeParam B - The sequence of strings to match.
 */
export type AndPredicate<
  A extends string,
  B extends string,
> = B extends `${A}${string}` ? B : never
