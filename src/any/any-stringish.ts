/**
 * A union of all TypeScript type that can be coercedto a string easily.
 * TODO - evaluate whether this would be better as { toString(): string }
 * @group Any
 * @example
 * ```
 * type Ex = `${AnyStringish}`
 * ```
 */
export type AnyStringish = string | number | bigint | boolean | null | undefined
