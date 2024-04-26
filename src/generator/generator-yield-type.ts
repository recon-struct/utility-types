/**
 * Return the yield type of a generator
 * @typeParam A - The generator to get the yield type of.
 * @group Generator
 * @example
 * ```
 * type Ex = GeneratorYieldType<Generator<string, any, any>> // string
 * ```
 */
export type GeneratorYieldType<A> = A extends Generator<infer B> ? B : never
