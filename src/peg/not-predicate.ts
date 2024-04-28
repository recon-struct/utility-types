/**
 * Type represents Parsing Expression Grammar (PEG) not-predicate operation.
 * @typeParam A - The string to not match.
 * @typeParam B - The sequence of strings to match.
 */
export type NotPredicate<
  A extends string,
  B extends string,
> = B extends `${A}${string}` ? never : B
