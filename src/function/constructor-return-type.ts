import type { Constructor } from './constructor'

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
 * Represents the type of an instance created by a constructor function.
 * @typeParam A - The constructor function.
 * @group Function
 */
export type InstanceOf<A extends Constructor> = ConstructorReturnType<A>
