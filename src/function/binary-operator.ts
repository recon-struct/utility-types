import type { AnyFunction } from '~/any/any-function'

/**
 * A generic binary operator interface
 * @group Function
 * @example
 * ```
 * type Ex1 = BinaryOperator                 // (a: any, b: any) => any
 * type Ex2 = BinaryOperator<string>         // (a: string, b: string) => any
 * type Ex3 = BinaryOperator<string, number> // (a: string, b: number) => any
 * ```
 */
export type BinaryOperator<
  A extends any = any,
  B extends any = A,
> = AnyFunction<[A, A], B>
