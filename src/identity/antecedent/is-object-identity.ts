import type { IsEqual } from '../../any/antecedent/is-equal'
import type { ObjectIntersectionIdenity } from '../object-intersection-identity'

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
export type IsObjectIdentity<A> = IsEqual<A, ObjectIntersectionIdenity>
