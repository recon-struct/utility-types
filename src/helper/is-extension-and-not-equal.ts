import type { IsExtension } from '~/extension/antecedent/is-extension'
import type { Or } from '~/logic/antecedent/or'
import type { Xor } from '~/logic/antecedent/xor'
import type { If } from '~/logic/if'
import type { IsEmptyObject } from '~/object/antecedent'

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
export type HelperIsExtensionAndNotEqual<A, B> = If<
  Or<IsEmptyObject<A>, IsEmptyObject<B>>,
  false,
  Xor<IsExtension<A, B>, IsExtension<B, A>>
>
