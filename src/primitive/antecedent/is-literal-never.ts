/**
 * Check if `A` is `never`
 * @typeParam A - The type to check.
 * @group Antecedent
 * @group Primitives
 * @example
 * ```
 * type Ex1 = IsLiteralNever<never>     // true
 * type Ex2 = IsLiteralNever<void>      // false
 * type Ex3 = IsLiteralNever<undefined> // false
 * type Ex4 = IsLiteralNever<null>      // false
 * ```
 */
export type IsLiteralNever<A> = [A] extends [never] ? true : false
