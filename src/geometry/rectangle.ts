import type { InferPoint, Point } from './point'

/**
 * Represents a rectangle in a 2D coordinate system.
 *
 * @typeParam A - The type of the top left point of the rectangle.
 * @typeParam B - The type of the width of the rectangle.
 * @typeParam C - The type of the height of the rectangle.
 * @group Geometry
 */
export interface Rectangle<
  A extends Point = Point,
  B extends number = number,
  C extends number = number,
> {
  type: 'rectangle'
  topLeft: InferPoint<A>
  width: B
  height: C
}
