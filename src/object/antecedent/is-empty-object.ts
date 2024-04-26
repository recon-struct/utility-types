/**
 * Check whether an object is empty or not.
 * @typeParam Obj - The object to check.
 * @group Antecedent
 * @group Object
 * @example
 * ```
 * type Ex1 = IsEmptyObject<{}>       // true
 * type Ex2 = IsEmptyObject<{ a: 2 }> // false
 * ```
 */
export type IsEmptyObject<Obj extends Record<PropertyKey, unknown>> =
  keyof Obj extends never ? true : false
