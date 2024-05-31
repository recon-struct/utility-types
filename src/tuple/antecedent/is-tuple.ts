/**
 * If `A` is a tuple return `true` else `false`
 * @typeParam A - The type to check.
 * @group Antecedent
 * @group Tuple
 * @example
 * ```
 * type Ex1 = IsTuple<[any, any]> // true
 * type Ex2 = IsTuple<any[]>      // false
 * ```
 */
export type IsTuple<A> = A extends any[]
  ? number extends A['length']
    ? false
    : true
  : false
