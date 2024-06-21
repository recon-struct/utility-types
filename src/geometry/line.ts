import type { InferPoint, Point } from './point'

/**
 * Represents a line segment between two points.
 *
 * @typeParam A - The type of the first point.
 * @typeParam B - The type of the second point.
 * @group Geometry
 */
export type Line<A extends Point = Point, B extends Point = Point> = [
  InferPoint<A>,
  InferPoint<B>,
]
