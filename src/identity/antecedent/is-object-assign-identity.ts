import type { IsEqual } from '~/extension/antecedent/is-equal'

/**
 * If `A ≡ {}` then `true` else `false`
 * @typeParam A - The type to check.
 * @group Antecedent
 * @group Identity
 * @example
 * ```
 * type Ex1 = IsObjectIdentity<{}>          // true
 * type Ex2 = IsObjectIdentity<{ a: true }> // false
 * ```
 */
export type IsObjectAssignIdentity<A> = IsEqual<A, {}>
