import type { AnyNullish } from '~/any/any-nullish'
import type { IsExtension } from '~/extension/antecedent/is-extension'

/**
 * If `A extends AnyNullish` then `true` else `false`
 * @group Antecedent
 * @group Any
 * @example
 * ```
 * type Ex1 = IsNullish<null>      // true
 * type Ex2 = IsNullish<undefined> // true
 * type Ex3 = IsNullish<0>         // false
 * type Ex4 = IsNullish<''>        // false
 * ```
 */
export type IsNullish<A> = IsExtension<A, AnyNullish>
