import type { Point } from './point'

/**
 * Represents a circle in a two-dimensional space.
 *
 * @typeParam A - The type of the center point of the circle.
 * @typeParam B - The type of the radius of the circle.
 * @group Geometry
 */
export interface Circle<A extends Point = Point, B extends number = number> {
  type: 'circle'
  center: A
  radius: B
}
