import type { IsExtension } from './is-extension'

/**
 * If `A extends B` and `B extends A` then `true` else `false`
 * @group Antecedent
 * @group Any
 * @example
 * ```
 * type Ex1 = IsEqual<true, boolean>  // false
 * type Ex2 = IsEqual<boolean, true>  // false
 * type Ex3 = IsEqual<false, boolean> // false
 * type Ex4 = IsEqual<boolean, false> // false
 * type Ex5 = IsEqual<true, true>     // true
 * type Ex6 = IsEqual<false, false>   // true
 * ```
 */
export type IsEqual<A, B> =
  IsExtension<A, B> extends true
    ? IsExtension<B, A> extends true
      ? true
      : false
    : false
