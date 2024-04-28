import type { Consume } from './utils'

/**
 * Type representing Parsing Expression Grammar (PEG) choice operation.
 * @typeParam A - The first string to match.
 * @typeParam B - The second string to match.
 * @typeParam C - The sequence of strings to match.
 * @experimental
 * @privateRemarks - TODO see if it is possible to not use `Consume` twice.
 */
export type Choice<A extends string, B extends string, C extends string> =
  Consume<A, C> extends never ? Consume<B, C> : Consume<A, C>
