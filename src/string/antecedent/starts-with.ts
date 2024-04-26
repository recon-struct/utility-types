/**
 * Checks if a string `A` starts with another string `B`.
 *
 * @typeParam A - The string to check.
 * @typeParam B - The string to compare with.
 * @group Antecedent
 * @group String
 * @example
 * ```
 * type Ex1 = StartsWith<'abc', 'a'> // true
 * type Ex2 = StartsWith<'abc', 'b'> // false
 * ```
 */
export type StartsWith<
  A extends string,
  B extends string,
> = A extends `${B}${string}` ? true : false
