import type { IsExtension } from '../../any/antecedent/is-extension'
import type { AnyKey } from '../../any/any-key'
import type { AnyObject } from '../../any/any-object'
import type { KeyOf } from '../key-of'

/**
 * If `B extends KeyOf<A>` then `true` else `false`
 * @typeParam A - The object to check.
 * @typeParam B - The key to search for.
 * @group Antecedent
 * @group Object
 * @example
 * ```
 * type Ex1 = IsKeyOf<{ hello: 'World' }, 'hello'> // true
 * type Ex2 = IsKeyOf<{ hello: 'World' }, 42>      // false
 * ```
 */
export type IsKeyOf<A extends AnyObject, B extends AnyKey> = IsExtension<
  B,
  KeyOf<A>
>
