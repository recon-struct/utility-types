import type { And } from '../../logic/antecedent/and'
import type { IsCaseSensitive } from '../antecedent/is-case-sensitive'
import type { IsUppercase } from '../antecedent/is-uppercase'

/**
 * @internal
 */
export interface SnakeCaseOpts<A extends string = string> {
  value: A
}

/**
 * Transform string `A` to snake-case split on `B` and uppercase letters
 * @typeParam A - The string to transform.
 * @group String
 * @example
 * ```
 * type Ex1 = SnakeCase<'HelloWorld'>       // 'hello_world'
 * type Ex2 = SnakeCase<'foo-bar'>          // 'foo_bar'
 * type Ex3 = SnakeCase<'fizz_buzz'>        // 'fizz_buzz'
 * type Ex4 = SnakeCase<'yip:yap:yup', ':'> // 'yip_yap_yup'
 * type Ex5 = SnakeCase<'wee*woo*waa', '*'> // 'wee_woo_waa'
 * ```
 */
export type SnakeCase<
  A extends string,
  B extends string = ' ' | '-',
  Z extends SnakeCaseOpts = SnakeCaseOpts<''>,
> = A extends `${infer D}${infer E}`
  ? D extends B
    ? Z['value'] extends ''
      ? SnakeCase<E, B, Z>
      : SnakeCase<E, B, SnakeCaseOpts<`${Z['value']}_`>>
    : And<IsCaseSensitive<D>, IsUppercase<D>> extends true
      ? Z['value'] extends ''
        ? SnakeCase<E, B, SnakeCaseOpts<Lowercase<D>>>
        : SnakeCase<E, B, SnakeCaseOpts<`${Z['value']}_${Lowercase<D>}`>>
      : SnakeCase<E, B, SnakeCaseOpts<`${Z['value']}${D}`>>
  : Z['value']
