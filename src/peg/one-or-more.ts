import type { Internal } from '../helpers/internal'
import type { Increment } from '../math'

interface Opts<A extends number = 0> extends Internal {
  value: A
}

/**
 * Type representing Parsing Expression Grammar (PEG) one one-or-more operation.
 * @typeParam A - The string to match one or more times.
 * @typeParam B - The sequence of strings to match.
 * @experimental
 */
export type OneOrMore<
  A extends string,
  B extends string,
  C extends Opts<number> = Opts<0>,
> = B extends `${A}${infer D}`
  ? OneOrMore<A, D, Opts<Increment<C['value']>>>
  : C['value'] extends 0
    ? never
    : B
