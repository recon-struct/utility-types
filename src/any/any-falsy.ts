import type { BigintAdditiveIdentity } from '../identity/bigint-additive-identity'
import type { NumAddIdentity } from '../identity/num-add-identity'
import type { StringConcatIdentity } from '../identity/string-concat-identity'

/**
 * A union of values that satisfy `<A>(a: A) => a == false`
 * @group Any
 * @example
 * ```
 * type Ex = AnyFalsy // false | '' | 0 | 0n | null | undefined
 * ```
 */
export type AnyFalsy =
  | false
  | StringConcatIdentity
  | NumAddIdentity
  | BigintAdditiveIdentity
  | null
  | undefined
