export interface CamelCaseOpts<A extends string = string> {
  value: A
}

/**
 * Transform a string `A` into camelcase splitting on `B`
 * @typeParam A - The string to transform.
 * @typeParam B - The string to split on.
 * @group String
 * @example
 * ```
 * type Ex1 = CamelCase<'hello world'>      // 'helloWorld'
 * type Ex2 = CamelCase<'foo-bar'>          // 'fooBar'
 * type Ex3 = CamelCase<'fizz_buzz'>        // 'fizzBuzz'
 * type Ex4 = CamelCase<'yip:yap:yup', ':'> // 'yipYapYup'
 * type Ex5 = CamelCase<'wee*woo*waa', '*'> // 'weeWooWaa'
 * ```
 */
export type CamelCase<
  A extends string,
  B extends string = ' ' | '-' | '_',
  Z extends CamelCaseOpts = CamelCaseOpts<''>,
> = A extends `${infer D}${B}${infer E}`
  ? Z['value'] extends ''
    ? CamelCase<E, B, CamelCaseOpts<D>>
    : CamelCase<
        E,
        B,
        CamelCaseOpts<`${Z['value']}${Capitalize<D>}${Capitalize<E>}`>
      >
  : Z['value'] extends ''
    ? A
    : Z['value']
