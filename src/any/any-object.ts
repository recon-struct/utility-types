/**
 * Generic object interface
 * @typeParam A - The type of the key.
 * @typeParam B - The type of the value.
 * @group Any
 * @example
 * ```
 * type Ex1 = AnyObject                     // { [_ in string | number | symbol]: any }
 * type Ex2 = AnyObject<'hello'>            // { hello: any }
 * type Ex2 = AnyObject<'a' | 'b', boolean> // { a: boolean, b: boolean }
 * ```
 */
export type AnyObject<A extends PropertyKey = PropertyKey, B = any> = Record<
  A,
  B
>
