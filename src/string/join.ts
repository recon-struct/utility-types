/**
 * Join a tuple of templatables `A` on a templatable `B`
 * @typeParam A - The tuple of templatables to join.
 * @typeParam B - The templatable to join on.
 * @group String
 * @example
 * ```
 * type Ex1 = Join<'a', 'b'>       // 'ab'
 * type Ex2 = Join<'a', 'b', '.'>  // 'a.b'
 * type Ex3 = Join<'a', null, '.'> // 'a'
 * type Ex4 = Join<null, 'b', '.'> // 'b'
 * ```
 */
export type Join<
  A extends string | number | null | undefined,
  B extends string | number | null | undefined,
  C extends string | number = '',
> = A extends string | number
  ? B extends string | number
    ? `${A}${C}${B}`
    : A
  : B extends string
    ? B
    : ''
