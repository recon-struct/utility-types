/**
 * Return the next type of a generator
 * @typeParam A - The generator to get the next type of.
 * @group Generator
 * @example
 * ```
 * type Ex = GeneratorNextType<Generator<any, any, string>> // string
 * ```
 */
export type GeneratorNextType<A> =
  A extends Generator<any, any, infer B> ? B : never
