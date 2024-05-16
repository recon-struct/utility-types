/**
 * Represents a type that wraps another type with a function that takes the
 * wrapped type as an argument.
 * @typeParam A - The type to be wrapped.
 * @group Helper
 */
export type HelperOuterWrapMap<A> = A extends any ? (_: A) => void : never
