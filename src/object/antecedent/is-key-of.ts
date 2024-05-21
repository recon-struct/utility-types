import type { IsExtension } from '~/extension/antecedent/is-extension'

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
export type IsKeyOf<A extends object, B extends PropertyKey> = IsExtension<
  B,
  keyof A
>
