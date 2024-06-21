/**
 * Represents a point in a two-dimensional coordinate system.
 *
 * @typeParam X - The type of the x-coordinate.
 * @typeParam Y - The type of the y-coordinate.
 * @group Geometry
 */
export type Point<X extends number = number, Y extends number = number> = [
  X,
  Y,
] & { type: 'point' }
