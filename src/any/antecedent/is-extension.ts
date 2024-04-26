/**
 * If `A extends B` then `true` else `false`
 * @group Antecedent
 * @group Any
 * @example
 * ```
 * type Ex1 = IsExtension<['a', string]> // true
 * type Ex2 = IsExtension<[string, 'a']> // false
 * ```
 */
export type IsExtension<A, B> = [A] extends [never]
  ? false
  : A extends B
    ? true
    : false
