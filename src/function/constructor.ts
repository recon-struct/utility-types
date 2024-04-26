/**
 * Represents a constructor function.
 * @typeParam A - The array of constructor arguments.
 * @typeParam B - The type of the constructed object.
 * @group Function
 * @example
 * ```
 * type Ex1 = AnyConstructor           // { new (..._: any[]): any }
 * type Ex2 = AnyConstructor<[number]> // { new (a: number): any }
 * ```
 */
export interface Constructor<A extends any[] = any[], B = any> {
  new (..._: A): B
}
