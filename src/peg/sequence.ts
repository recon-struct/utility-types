import type { ConsumeRight } from '../string/consume-right'

/**
 * Type representing Parsing Expression Grammar (PEG) sequence operation.
 * @typeParam A - The first string to match.
 * @typeParam B - The second string to match.
 * @typeParam C - The sequence of strings to match.
 * @group Parsing Expression Grammars
 * @experimental
 */
export type Sequence<
  A extends string,
  B extends string,
  C extends string,
> = ConsumeRight<B, ConsumeRight<A, C>>
