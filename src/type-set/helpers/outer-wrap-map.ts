/**
 * # 🚫 DO NOT EXPORT FROM src/index.ts
 * Represents a type that wraps another type with a function that takes the
 * wrapped type as an argument.
 * @typeParam A - The type to be wrapped.
 * @internal
 */
export type OuterWrapMap<A> = A extends any ? (_: A) => void : never
