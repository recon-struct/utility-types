/**
 * Return the intersection of `A` and `B` for any conflicts defer to `B`.
 * @typeParam A - The object to override.
 * @group Object
 * @example
 * ```
 * type Ex = Override<{ a: number, b: number }, { a: string }>['a'] // string
 * ```
 */
export type Override<A extends object, B extends object> = Omit<A, keyof B> & B
