import type { Point } from './point'

/**
 * Represents a path in geometry.
 *
 * @typeParam A - The type of the points in the path.
 * @typeParam B - The type of the flag indicating if the path is closed.
 * @group Geometry
 */
export interface Path<
  A extends Point[] = Point[],
  B extends boolean = boolean,
> {
  type: 'path'
  points: [...A]
  isClosed: B
}
