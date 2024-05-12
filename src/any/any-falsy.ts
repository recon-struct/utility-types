import type { BigIntAddIdentity } from '~/identity/bigint-add-identity'
import type { NumAddIdentity } from '~/identity/num-add-identity'
import type { StringConcatIdentity } from '~/identity/string-concat-identity'

/**
 * A union of values that satisfy `!!value === false`
 * @group Any
 * @example
 * ```
 * type Ex = AnyFalsy // '' | false | 0 | 0n | null | undefined
 * ```
 */
export type AnyFalsy =
  | StringConcatIdentity
  | false
  | NumAddIdentity
  | BigIntAddIdentity
  | null
  | undefined
