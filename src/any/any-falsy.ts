/**
 * A union of values that satisfy `!!value === false`
 * @group Any
 * @example
 * ```
 * type Ex = AnyFalsy // '' | false | 0 | 0n | null | undefined
 * ```
 */
export type AnyFalsy = '' | false | 0 | 0n | null | undefined
