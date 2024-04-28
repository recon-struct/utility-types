import type { Consume } from '../string/consume'

/**
 * Type representing Parsing Expression Grammar (PEG) sequence operation.
 * @typeParam A - The first string to match.
 * @typeParam B - The second string to match.
 * @typeParam C - The sequence of strings to match.
 * @experimental
 */
export type Sequence<
  A extends string,
  B extends string,
  C extends string,
> = Consume<B, Consume<A, C>>
