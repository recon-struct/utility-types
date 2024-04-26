/**
 * Return the return type of a generator
 * @typeParam A - The generator to get the return type of.
 * @group Generator
 * @example
 * ```
 * type Ex = GeneratorReturnType<Generator<any, string, any>> // string
 * ```
 */
export type GeneratorReturnType<A> =
  A extends Generator<any, infer B> ? B : never
