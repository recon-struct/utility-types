/**
 * Retrieves the value at a given path in an object.
 * @typeParam A - The object type.
 * @typeParam B - The path type.
 * @group Object
 * @example
 * ```
 * type Ex1 = GetPathValue<{ a: { b: 'c' } }, ['a', 'b']> // 'c'
 * type Ex2 = GetPathValue<{ a: { b: 'c' }; d: 'e' }, ['d']> // 'c'
 * type Ex3 = GetPathValue<{ a: { b: 'c' } }, ['z']> // 'c'
 * ```
 */
export type GetPathValue<
  A extends object,
  B extends PropertyKey[] = [],
> = B extends []
  ? A
  : B extends [infer C, ...infer D]
    ? C extends keyof A
      ? A[C] extends object
        ? D extends PropertyKey[]
          ? GetPathValue<A[C], D>
          : undefined
        : A[C]
      : undefined
    : never
