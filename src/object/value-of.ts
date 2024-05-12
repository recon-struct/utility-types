import type { AnyMap } from '~/any/any-map'
import type { AnySet } from '~/any/any-set'
import type { AnyWeakMap } from '~/any/any-weak-map'
import type { AnyWeakSet } from '~/any/any-weak-set'

/**
 * Return the union of all values in `A`
 * @typeParam A - The object to get the values of.
 * @group Object
 * @example
 * ```
 * type Ex1 = ValueOf<{ a: string, b: number }> // string | number
 * type Ex2 = ValueOf<Set<symbol>>              // symbol
 * type Ex3 = ValueOf<Map<string, number>>      // number
 * type Ex4 = ValueOf<WeakSet<{ a: 1 }>>        // { a: 1 }
 * type Ex5 = ValueOf<WeakMap<object, string>>  // string
 * ```
 */
export type ValueOf<A> =
  A extends AnySet<infer B>
    ? B
    : A extends AnyMap<any, infer C>
      ? C
      : A extends AnyWeakSet<infer D>
        ? D
        : A extends AnyWeakMap<object, infer E>
          ? E
          : A[keyof A]
