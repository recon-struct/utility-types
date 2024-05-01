import type { And } from '../../logic/antecedent/and'
import type { IsCaseSensitive } from '../antecedent/is-case-sensitive'
import type { IsUppercase } from '../antecedent/is-uppercase'

/**
 * # 🚫 DO NOT EXPORT
 */
interface KebabCaseOpts<A extends string = string> {
  value: A
}

/**
 * Transform string `A` to kebab-case split on `B` and uppercase letters
 * @typeParam A - The string to transform.
 * @typeParam B - The string to split on.
 * @group String
 * @example
 * ```
 * type Ex1 = KebabCase<'HelloWorld'>       // 'hello-world'
 * type Ex2 = KebabCase<'foo-bar'>          // 'foo-bar'
 * type Ex3 = KebabCase<'fizz_buzz'>        // 'fizz-buzz'
 * type Ex4 = KebabCase<'yip:yap:yup', ':'> // 'yip-yap-yup'
 * type Ex5 = KebabCase<'wee*woo*waa', '*'> // 'wee-woo-waa'
 * ```
 */
export type KebabCase<
  A extends string,
  B extends string = ' ' | '_',
  Z extends KebabCaseOpts = KebabCaseOpts<''>,
> = A extends `${infer D}${infer E}`
  ? D extends B
    ? Z['value'] extends ''
      ? KebabCase<E, B, Z>
      : KebabCase<E, B, KebabCaseOpts<`${Z['value']}-`>>
    : And<IsCaseSensitive<D>, IsUppercase<D>> extends true
      ? Z['value'] extends ''
        ? KebabCase<E, B, KebabCaseOpts<Lowercase<D>>>
        : KebabCase<E, B, KebabCaseOpts<`${Z['value']}-${Lowercase<D>}`>>
      : KebabCase<E, B, KebabCaseOpts<`${Z['value']}${D}`>>
  : Z['value']
