/**
 * Alias of `Exclude<A, B>` The
 * [complement](https://en.wikipedia.org/wiki/Complement_(set_theory)#Relative_complement)
 * `B \ A` of `A` and `B`
 * @typeParam A - The union to remove from.
 * @typeParam B - The union to remove.
 * @internal
 * @experimental
 */
export type Complement<A, B> = Exclude<A, B>
