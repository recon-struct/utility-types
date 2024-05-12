import type { DeepObject, GetKeys } from '~/object/get-keys'

/**
 * Get the type of prop corresponding to `B` from `A`
 * @typeParam A - The object to get the value from.
 * @typeParam B - The path to the value.
 * @typeParam C - The separator between keys.
 * @group Object
 * @example
 * ```
 * type Ex1 = GetValue<{ a: { b: 'c' } }, 'a.b'>      // 'c'
 * type Ex2 = GetValue<{ a: { b: 'c' } }, 'a:b', ':'> // 'c'
 * ```
 */
export type GetValue<
  A extends DeepObject,
  B extends GetKeys<A, C>,
  C extends string = '.',
> = B extends `${infer D}${C}${infer E}`
  ? A[D] extends DeepObject
    ? E extends GetKeys<A[D], C>
      ? GetValue<A[D], E, C>
      : never
    : never
  : A[B]
