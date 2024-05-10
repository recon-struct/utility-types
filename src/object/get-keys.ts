import type { AnyKey } from '../any/any-key'
import type { AnyPrimitive } from '../any/any-primitive'
import type { Internal } from '../helpers/internal'
import type { Join } from '../tuple/join'
import type { IsEmptyObject } from './antecedent'
import type { KeyOf } from './key-of'

/**
 * # 🚫 DO NOT EXPORT
 */
interface GetKeysOpts<A extends string | undefined = string | undefined>
  extends Internal {
  value: A
}

/**
 * Represents a deep object that can have nested objects or any primitive values.
 * @group Object
 */
export interface DeepObject {
  [_: AnyKey]: DeepObject | AnyPrimitive
}

/**
 * Recurse over object `A` returning strings representing every path.
 * @typeParam A - The object to get the keys from.
 * @typeParam B - The separator between keys.
 * @typeParam C - The current path.
 * @group Object
 * @example
 * ```
 * type Ex1 = GetKeys<{ a: { b: 'c' }, d: 'e' }>      // 'a.b' | d
 * type Ex2 = GetKeys<{ a: { b: 'c' }, d: 'e' }, ':'> // 'a:b' | d
 * ```
 */
export type GetKeys<
  A extends DeepObject,
  B extends string = '.',
  C extends GetKeysOpts = GetKeysOpts<''>,
> = A extends object
  ? {
      [D in KeyOf<A>]: A[D] extends object
        ? D extends string
          ? IsEmptyObject<A> extends true
            ? Join<[C['value'], D], B>
            : GetKeys<A[D], B, GetKeysOpts<Join<[C['value'], D], B>>>
          : never
        : D extends string
          ? Join<[C['value'], D], B>
          : never
    }[KeyOf<A>]
  : never
