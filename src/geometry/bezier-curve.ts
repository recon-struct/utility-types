import type { InferPoint, Point } from './point'

/**
 * Represents a Bezier curve in 2D space.
 *
 * @typeParam A - The type of the start point.
 * @typeParam B - The type of the end point.
 * @typeParam C - The type of the first control point.
 * @typeParam D - The type of the second control point.
 * @group Geometry
 */
export interface BezierCurve<
  A extends Point = Point,
  B extends Point = Point,
  C extends Point = Point,
  D extends Point = Point,
> {
  type: 'bezier-curve'
  start: InferPoint<A>
  control1: InferPoint<B>
  control2: InferPoint<C>
  end: InferPoint<D>
}
