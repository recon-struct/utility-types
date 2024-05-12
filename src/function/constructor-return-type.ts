import type { Constructor } from '~/function/constructor'

/**
 * Returns the type of the return value of a constructor function.
 * @typeParam A - The constructor function.
 * @returns The type of the return value of the constructor function.
 * @group Function
 * @example
 * ```
 * type Ex = ConstructorReturnType<typeof RegExp> // RegExp
 * ```
 */
export type ConstructorReturnType<A extends Constructor> =
  A extends Constructor<any[], infer B> ? B : never

/**
 * Alias for `ConstructorReturnType`.
 * @typeParam A - The constructor function.
 * @group Function
 */
export type InstanceOf<A extends Constructor> = ConstructorReturnType<A>
