/**
 * Return the length of tuple `A`
 * @typeParam A - The tuple to get the length of.
 * @group Object
 * @example
 * ```
 * type Ex1 = LengthProp<'Hello'>   // 5
 * type Ex2 = LengthProp<[1, 2, 3]> // 3
 * ```
 */
export type LengthProp<A> = 'length' extends keyof A ? A['length'] : never
