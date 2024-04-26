import type { AnyArray } from '../any/any-array'
import type { LengthProp } from '../object/length-prop'
import type { StringLength } from '../string/string-length'

/**
 * Calculates the length of a string or an array.
 * @typeParam A - The input type (string or array).
 */
export type Length<A extends string | AnyArray> = A extends string
  ? StringLength<A>
  : LengthProp<A>
