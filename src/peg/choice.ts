import type { IsNever } from '~/any/antecedent/is-never'
import type { If } from '~/logic/if'
import type { ConsumeRight } from '~/string/consume-right'

/**
 * Type representing Parsing Expression Grammar (PEG) choice operation.
 * @typeParam A - The first string to match.
 * @typeParam B - The second string to match.
 * @typeParam C - The sequence of strings to match.
 * @group Parsing Expression Grammars
 * @experimental
 * @privateRemarks - TODO see if it is possible to not use `Consume` twice.
 */
export type Choice<A extends string, B extends string, C extends string> = If<
  IsNever<ConsumeRight<A, C>>,
  ConsumeRight<B, C>,
  ConsumeRight<A, C>
>
