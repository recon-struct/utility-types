import type { Point } from './point'

/**
 * Represents an ellipse in a two-dimensional space.
 *
 * @typeParam A - The type of the center point of the ellipse.
 * @typeParam B - The type of the radius along the x-axis of the ellipse.
 * @typeParam C - The type of the radius along the y-axis of the ellipse.
 * @group Geometry
 */
export interface Ellipse<
  A extends Point = Point,
  B extends number = number,
  C extends number = number,
  D extends number = number,
> {
  type: 'ellipse'
  center: A
  radiusX: B
  radiusY: C
  rotation: D
}
