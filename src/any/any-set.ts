/**
 * Generic Set interface
 * @typeParam A - The type of the value.
 * @group Any
 * @example
 * ```
 * type Ex1 = AnySet // Set<any>
 * type Ex2 = AnySet<number> // Set<number>
 * ```
 */
export interface AnySet<A = any> extends Set<A> {}
