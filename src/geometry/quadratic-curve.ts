import type { Point } from './point'

/**
 * Represents a quadratic curve in a 2D coordinate system.
 *
 * @typeParam A - The type of the start point.
 * @typeParam B - The type of the control point.
 * @typeParam C - The type of the end point.
 * @group Geometry
 */
export interface QuadraticCurve<
  A extends Point = Point,
  B extends Point = Point,
  C extends Point = Point,
> {
  type: 'quadratic-curve'
  start: A
  control: B
  end: C
}
