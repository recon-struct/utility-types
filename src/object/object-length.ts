import type { AnyObject } from '~/any/any-object'
import type { HelperUnionUniqueLength } from '~/helper/union-unique-length'
import type { IsLiteralKey } from '~/literal/antecedent/is-literal-key'
import type { KeyOf } from '~/object/key-of'

/**
 * Gets the number of keys in an object type.
 * @typeParam A - The object type.
 * @group Object
 * @example
 * ```ts
 * type Ex1 = ObjectLength<{ a: 1; b: 2 }>                      // 2
 * type Ex2 = ObjectLength<{ [k: string]: number }>             // number
 * type Ex3 = ObjectLength<{ a: 1; b: 2; [k: string]: number }> // number
 * ```
 */
export type ObjectLength<A extends AnyObject> =
  IsLiteralKey<KeyOf<A>> extends true
    ? HelperUnionUniqueLength<KeyOf<A>>
    : number
