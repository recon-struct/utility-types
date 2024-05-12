/**
 * Represents a type that wraps another type in a function.
 * @typeParam A - The type to be wrapped.
 * @grope Helper
 */
export type HelperInnerWrapMap<A> = A extends any ? () => A : never
