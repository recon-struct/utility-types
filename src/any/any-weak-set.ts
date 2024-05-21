/**
 * Generic WeakSet interface
 * @typeParam A - The type of the value.
 * @group Any
 * @example
 * ```
 * type Ex1 = AnyWeakSet // WeakSet<any>
 * type Ex2 = AnyWeakSet<number> // WeakSet<number>
 * ```
 */
export interface AnyWeakSet<A extends object = object> extends WeakSet<A> {}
