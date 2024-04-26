/**
 * The identity element for strings.
 *
 * Identity element under the following operation
 * ```
 * IsEqual<`abc${StringIdentity}`, `abc`> // true
 * ```
 * @group Identity
 * @example
 * ```
 * type Ex = StringIdentity // ''
 * ```
 */
export type StringConcatIdentity = ''

/**
 * Alias of `StringIdentity`
 * @group Identity
 */
export type EmptyString = StringConcatIdentity
