/**
 * The identity element for arrays
 *
 * Identity element under the following operation
 * ```
 * IsEqual<[1, 2, 3, ...ArrayConcatIdentity], [1, 2, 3]> // true
 * ```
 * @group Identity
 * @example
 * ```
 * type Ex = ArrayConcatIdentity // []
 * ```
 */
export type ArrayConcatIdentity = []
