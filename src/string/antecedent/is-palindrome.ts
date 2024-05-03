import type { IsEqual } from '~/any/antecedent/is-equal'
import type { IsLiteralString } from '~/literal/antecedent/is-literal-string'
import type { And } from '~/logic/antecedent/and'
import type { Join } from '~/tuple/join'
import type { Reverse } from '~/tuple/reverse'
import type { Split } from '../split'

/**
 * Checks if the given string `A` is a IsPalindrome
 * @typeParam A - The string to check.
 * @group String
 * @example
 * ```
 * type Ex1 = IsPalindrome<'ABBA'> // true
 * type Ex2 = IsPalindrome<'Rush'> // false
 * type Ex3 = IsPalindrome<string> // false
 * ```
 */
export type IsPalindrome<A extends string> = And<
  IsLiteralString<A>,
  IsEqual<A, Join<Reverse<Split<A>>>>
>
