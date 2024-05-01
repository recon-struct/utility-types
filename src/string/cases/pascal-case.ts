/**
 * # 🚫 DO NOT EXPORT
 */
interface PascalCaseOpts<A extends string = string> {
  value: A
}

/**
 * Transform string `A` to PascalCase split on string `B`
 * @typeParam A - The string to transform.
 * @typeParam B - The string to split on.
 * @group String
 * @example
 * ```
 * type Ex1 = PascalCase<'hello world'>      // 'HelloWorld'
 * type Ex2 = PascalCase<'foo-bar'>          // 'FooBar'
 * type Ex3 = PascalCase<'fizz_buzz'>        // 'FizzBuzz'
 * type Ex4 = PascalCase<'yip:yap:yup', ':'> // 'YipYapYup'
 * type Ex5 = PascalCase<'wee*woo*waa', '*'> // 'WeeWooWaa'
 * ```
 */
export type PascalCase<
  A extends string,
  B extends string = ' ' | '-' | '_',
  Z extends PascalCaseOpts = PascalCaseOpts<''>,
> = A extends `${infer D}${B}${infer E}`
  ? PascalCase<E, B, PascalCaseOpts<`${Z['value']}${Capitalize<D>}`>>
  : Z['value'] extends ''
    ? A
    : `${Z['value']}${Capitalize<A>}`
