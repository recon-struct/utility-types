import type { Point } from './point'

/**
 * Represents an arc in a two-dimensional space.
 *
 * @typeParam A - The type of the center point of the arc.
 * @typeParam B - The type of the radius of the arc.
 * @typeParam C - The type of the start angle of the arc (in radians).
 * @typeParam D - The type of the end angle of the arc (in radians).
 * @group Geometry
 */
export interface Arc<
  A extends Point = Point,
  B extends number = number,
  C extends number = number,
  D extends number = number,
> {
  type: 'arc'
  center: A
  radius: B
  startAngle: C // Angle in radians
  endAngle: D // Angle in radians
}
