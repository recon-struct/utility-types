/**
 * Checks if a string ends with another string.
 *
 * @typeParam A - The first string.
 * @typeParam B - The second string.
 * @group String
 * @group Antecedent
 * @example
 * ```
 * type Ex1 = EndsWith<'abc', 'c'> // true
 * type Ex2 = EndsWith<'abc', 'b'> // false
 * ```
 */
export type EndsWith<
  A extends string,
  B extends string,
> = A extends `${string}${B}` ? true : false
