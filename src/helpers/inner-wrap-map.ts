/**
 * Represents a type that wraps another type in a function.
 * @typeParam A - The type to be wrapped.
 */
export type InnerWrapMap<A> = A extends any ? () => A : never
