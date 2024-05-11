import type { IsZero } from '~/identity/antecedent/is-num-add-identity'
import type { If } from '~/logic/if'
import type { Increment } from '../math'

export interface OneOrMoreOpts<A extends number = 0> {
  value: A
}

/**
 * Type representing Parsing Expression Grammar (PEG) one one-or-more operation.
 * @typeParam A - The string to match one or more times.
 * @typeParam B - The sequence of strings to match.
 * @group Parsing Expression Grammars
 * @experimental
 */
export type OneOrMore<
  A extends string,
  B extends string,
  C extends OneOrMoreOpts<number> = OneOrMoreOpts<0>,
> = B extends `${A}${infer D}`
  ? OneOrMore<A, D, OneOrMoreOpts<Increment<C['value']>>>
  : If<IsZero<C['value']>, never, B>
