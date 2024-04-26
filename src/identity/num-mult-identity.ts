/**
 * The multiplicative identity element for number
 *
 * Identity element under the following operations
 * ```
 * IsEqual<Multiply<2, NumMultIdentity>, 2> // true
 * IsEqual<Divide<4, NumMultIdentity>, 4>   // true
 * ```
 * @group Identity
 * @example
 * ```
 * type Ex = NumMultIdentity // 1
 * ```
 */
export type NumMultIdentity = 1

/**
 * Alias of `NumMultIdentity`
 * @group Identity
 */
export type One = NumMultIdentity
