import type { IsExtension } from '../../any'

/**
 * Checks if a value is a generator function.
 * @typeParam A - The type to check.
 * @group Antecedent
 * @group Generator
 */
export type IsGenerator<A> = IsExtension<A, Generator>
