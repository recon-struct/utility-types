/**
 * Represents a vector in 2D space.
 *
 * @typeParam X - The type of the x-coordinate.
 * @typeParam Y - The type of the y-coordinate.
 * @group Geometry
 */
export type Vector<X extends number = number, Y extends number = number> = [
  X,
  Y,
] & { type: 'vector' }
