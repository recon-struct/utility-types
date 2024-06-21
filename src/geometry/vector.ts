/**
 * Type inference for the Vector type.
 *
 * @typeParam A - The input Vector type.
 * @group Geometry
 */
export type InferVector<A extends Vector> =
  A extends Vector<infer B, infer C> ? Vector<B, C> : never

/**
 * Infers the vector types from an array of vectors.
 *
 * @typeParam A - The input array of vectors.
 * @typeParam B - The output array of inferred vector types.
 * @group Geometry
 */
export type InferVectors<
  A extends Vector[],
  B extends Vector[] = [],
> = A extends []
  ? B
  : A extends [infer C extends Vector, ...infer D extends Vector[]]
    ? InferVectors<D, [...B, InferVector<C>]>
    : never

/**
 * Represents a vector in 2D space.
 *
 * @typeParam X - The type of the x-coordinate.
 * @typeParam Y - The type of the y-coordinate.
 * @group Geometry
 */
export type Vector<X extends number = number, Y extends number = number> = [
  X,
  Y,
] & { type: 'vector' }
