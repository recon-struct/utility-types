import type { If } from '~/logic/if'
import type { StartsWith } from '~/string/antecedent/starts-with'

/**
 * Type represents Parsing Expression Grammar (PEG) not-predicate operation.
 * @typeParam A - The string to not match.
 * @typeParam B - The sequence of strings to match.
 * @group Parsing Expression Grammars
 * @experimental
 */
export type NotPredicate<A extends string, B extends string> = If<
  StartsWith<B, A>,
  never,
  B
>
