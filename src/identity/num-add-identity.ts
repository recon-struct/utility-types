/**
 * The additive identity element for number
 *
 * Identity element under the following operations
 * ```
 * IsEqual<Add<1, NumAddIdentity>, 1>      // true
 * IsEqual<Subtract<2, NumAddIdentity>, 2> // true
 * ```
 * @group Identity
 * @example
 * ```
 * type Ex = NumAddIdentity // 0
 * ```
 */
export type NumAddIdentity = 0

/**
 * Alias of `NumAddIdentity`
 * @group Identity
 */
export type Zero = NumAddIdentity
