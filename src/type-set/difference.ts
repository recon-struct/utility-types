import type { Intersection } from './intersection'
import type { Union } from './union'

/**
 * Alias of `Exclude<A | B, A & B>`. The
 * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
 * `A △ B` of `A` and `B`
 * @typeParam A - The union to compare.
 * @typeParam B - The union to compare.
 * @group Type Set
 */
export type Difference<A, B> = Exclude<Union<A, B>, Intersection<A, B>>
