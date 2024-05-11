/**
 * The identity element for objects
 *
 * Identity element under the following operation
 * ```
 * IsEqual<{a: true} & ObjectIdenity, {a: true}> // true
 * ```
 * @group Identity
 * @example
 * ```
 * type Ex = ObjectIdenity // {}
 * ```
 */
export type ObjectAssignIdentity = {}

/**
 * @deprecated - Use `ObjectAssignIdenity` instead.
 */
export type ObjectIntersectionIdentity = ObjectAssignIdentity
