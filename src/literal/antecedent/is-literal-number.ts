import type { HelperIsExtensionAndNotEqual } from '~/helper/is-extension-and-not-equal'

/**
 * Checks if the given type `A` is a literal number.
 * @typeParam A - The type to check.
 * @group Antecedent
 * @group Literal
 * @example
 * ```
 * type Ex1 = IsLiteralNumber<1>      // true
 * type Ex2 = IsLiteralNumber<number> // false
 * ```
 */
export type IsLiteralNumber<A> = HelperIsExtensionAndNotEqual<A, number>
