import type { AnyFunction } from '../any'

/**
 * Represents a unary operator function.
 *
 * Alias of `Arity1<A, B>`.
 * @typeParam A - The input type of the operator.
 * @typeParam B - The output type of the operator.
 * @group Function
 * @example
 * ```
 * type Ex1 = UnaryOperator          // (a: any) => any
 * type Ex2 = UnaryOperator<boolean> // (a: boolean) => boolean
 * ```
 */
export type UnaryOperator<A = any, B = any> = AnyFunction<[A], B>
