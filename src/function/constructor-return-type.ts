/**
 * Returns the type of the return value of a constructor function.
 * @typeParam A - The constructor function.
 * @group Function
 * @example
 * ```
 * type Ex = ConstructorReturnType<typeof RegExp> // RegExp
 * ```
 */
export type ConstructorReturnType<A extends { new (..._: any[]): any }> =
  A extends { new (..._: any[]): infer B } ? B : never

/**
 * Alias for `ConstructorReturnType`.
 * @typeParam A - The constructor function.
 * @group Function
 */
export type InstanceOf<A extends { new (..._: any[]): any }> =
  ConstructorReturnType<A>
