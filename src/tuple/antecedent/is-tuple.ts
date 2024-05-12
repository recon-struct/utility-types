import type { AnyArray } from '~/any/any-array'
import type { IsExtension } from '~/extension/antecedent/is-extension'
import type { And } from '~/logic/antecedent/and'
import type { Not } from '~/logic/antecedent/not'
import type { LengthProp } from '~/object/length-prop'

/**
 * If `A` is a tuple return `true` else `false`
 * @typeParam A - The type to check.
 * @group Antecedent
 * @group Tuple
 * @example
 * ```
 * type Ex1 = IsTuple<[any, any]> // true
 * type Ex2 = IsTuple<any[]>      // false
 * ```
 */
export type IsTuple<A> = And<
  IsExtension<A, AnyArray>,
  Not<IsExtension<number, LengthProp<A>>>
>
