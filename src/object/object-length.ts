import type { AnyObject } from '../any'
import type { IsLiteralKey } from '../primitive'
import type { UnionUniqueLength } from '../type-set/union-unique-length'
import type { KeyOf } from './key-of'

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
  IsLiteralKey<KeyOf<A>> extends true ? UnionUniqueLength<KeyOf<A>> : number
