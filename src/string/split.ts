import type { Internal } from '../helpers/internal'

/**
 * # 🚫 DO NOT EXPORT
 */
interface SplitOpts<A extends string[] = string[]> extends Internal {
  value: A
}

/**
 * Splits a string `A` into an array of substrings split on string `B`
 * @typeParam A - The string to split.
 * @typeParam B - The string to split on.
 * @group String
 * @example
 * ```
 * type Ex1 = Split<'abc'>        // ['a', 'b', 'c']
 * type Ex2 = Split<'1,2,3', ','> // ['1', '2', '3']
 * ```
 */
export type Split<
  A extends string,
  B extends string = '',
  Z extends SplitOpts = SplitOpts<[]>,
> = B extends ''
  ? A extends `${infer D}${infer E}`
    ? Split<E, B, SplitOpts<[...Z['value'], D]>>
    : Z['value']
  : A extends `${string}${B}${string}`
    ? A extends `${infer D}${B}${infer E}`
      ? Split<E, B, SplitOpts<[...Z['value'], D]>>
      : never
    : [...Z['value'], A]
