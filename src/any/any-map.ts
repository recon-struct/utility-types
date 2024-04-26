/**
 * Generic Map interface
 * @typeParam A - The type of the key.
 * @typeParam B - The type of the value.
 * @group Any
 * @example
 * ```
 * type Ex1 = AnyMap                 // Map<any, any>
 * type Ex2 = AnyMap<symbol>         // Map<symbol, any>
 * type Ex3 = AnyMap<number, string> // Map<number, string>
 * ```
 */
export type AnyMap<A = any, B = any> = Map<A, B>
