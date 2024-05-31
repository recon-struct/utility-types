/**
 * Represents a type that expects a value of type `true` used for unit tests.
 *
 * @typeParam A The type to expect, which should be `true`.
 */
export type Expect<A extends true> = A
