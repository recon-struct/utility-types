import type { Internal } from '../helpers/internal'
import type { IsLiteralString } from '../literal/antecedent/is-literal-string'
import type { Increment } from '../math/increment'

/**
 * # 🚫 DO NOT EXPORT
 */
interface StringLengthOpts<A extends number = number> extends Internal {
  value: A
}

/**
 * Calculates the length of a string type recursively.
 * @typeParam A - The string type to calculate the length of.
 * @group String
 * @example
 * ```
 * type Ex1 = StringLength<'abc'>          // 3
 * type Ex2 = StringLength<'abc' | 'wxyz'> // 3 | 4
 * type Ex3 = StringLength<string>         // number
 * ```
 */
export type StringLength<
  A extends string,
  B extends StringLengthOpts = StringLengthOpts<0>,
> =
  IsLiteralString<A> extends true
    ? A extends `${string}${infer C}`
      ? StringLength<C, StringLengthOpts<Increment<B['value']>>>
      : B['value']
    : number
