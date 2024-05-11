import { Or } from '~/logic/antecedent'
import { If } from '~/logic/if'
import { IsEmptyObject } from '~/object/antecedent'
import type { IsExtension } from '../../any/antecedent/is-extension'
import type { Xor } from '../../logic/antecedent/xor'

/**
 * Checks if type `A` extends type `B` and is not equal to type `B`.
 * @typeParam A - The first type to compare.
 * @typeParam B - The second type to compare.
 * @group Antecedent
 * @group Literal
 * @example
 * ```
 * type Ex1 = IsExtensionAndNotEqual<1, number>      // true
 * type Ex2 = IsExtensionAndNotEqual<number, 1>      // true
 * type Ex3 = IsExtensionAndNotEqual<1, 1>           // false
 * type Ex4 = IsExtensionAndNotEqual<number, number> // false
 * ```
 */
export type IsExtensionAndNotEqual<A, B> = If<
  Or<IsEmptyObject<A>, IsEmptyObject<B>>,
  false,
  Xor<IsExtension<A, B>, IsExtension<B, A>>
>
