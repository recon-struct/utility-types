import type { AnyArray, AnyFunction, AnyObject } from '../any'

/**
 * Represents a factory function that takes an array of arguments of type A and returns an object of type B.
 * @typeParam A - The type of the arguments array.
 * @typeParam B - The type of the returned object.
 * @group Function
 */
export type Factory<
  A extends AnyArray = AnyArray,
  B extends AnyObject = AnyObject,
> = AnyFunction<A, B>
