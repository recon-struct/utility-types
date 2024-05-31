import type { UnionUniqueLength } from '~/helper/union-unique-length'
import type { IsLiteralKey } from '~/literal/antecedent/is-literal-key'

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
export type ObjectLength<A extends object> =
  IsLiteralKey<keyof A> extends true ? UnionUniqueLength<keyof A> : number
