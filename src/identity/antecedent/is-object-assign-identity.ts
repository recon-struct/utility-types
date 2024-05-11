import type { IsEqual } from '../../any/antecedent/is-equal'
import type { ObjectAssignIdentity } from '../object-assign-identity'

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
export type IsObjectAssignIdentity<A> = IsEqual<A, ObjectAssignIdentity>

/**
 * @deprecated - Use `IsObjectAssignIdentity` instead.
 */
export type IsObjectIdentity<A> = IsObjectAssignIdentity<A>
