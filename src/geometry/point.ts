/**
 * Infers the type of a Point based on the provided Point type.
 *
 * @typeParam A - The input Point type.
 * @returns The inferred Point type.
 * @group Geometry
 */
export type InferPoint<A extends Point> =
  A extends Point<infer B, infer C> ? Point<B, C> : never

/**
 * Infers an array of points from an array of point tuples.
 *
 * @typeParam A - The input array of point tuples.
 * @typeParam B - The output array of inferred points.
 * @group Geometry
 */
export type InferPoints<
  A extends Point[],
  B extends Point[] = [],
> = A extends []
  ? B
  : A extends [infer C extends Point, ...infer D extends Point[]]
    ? InferPoints<D, [...B, InferPoint<C>]>
    : never

/**
 * Represents a point in a two-dimensional coordinate system.
 *
 * @typeParam X - The type of the x-coordinate.
 * @typeParam Y - The type of the y-coordinate.
 * @group Geometry
 */
export type Point<X extends number = number, Y extends number = number> = [X, Y]
