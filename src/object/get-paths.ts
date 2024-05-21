/**
 * Retrieves all possible paths of nested properties in an object.
 * @typeParam A - The input object type.
 * @typeParam B - The options for retrieving paths.
 * @group Object
 * @example
 * ```
 * type Ex1 = GetPaths<{ a: { b: 'c' } }>         // ['a', 'b']
 * type Ex2 = GetPaths<{ a: { b: 'c' }, d: 'e' }> // ['a', 'b'] | ['d']
 */
export type GetPaths<
  A extends object,
  B extends PropertyKey[] = [],
> = A extends object
  ? {
      [C in keyof A]: A[C] extends object
        ? GetPaths<A[C], [...B, C]>
        : [...B, C]
    }[keyof A]
  : never
