import type { IsExtension } from '../../any/antecedent/is-extension'
import type { AnyFunction } from '../../any/any-function'

/**
 * If `A extends AnyFunction` then `true` else `false`
 * @group Antecedent
 * @group Any
 * @example
 * ```
 * type Ex1 = IsFunction<AnyFunction>                   // true
 * type Ex2 = IsFunction<(..._: AnyArray) => any>       // true
 * type Ex3 = IsFunction<{ (..._: AnyArray): any }>     // true
 * type Ex4 = IsFunction<AnyConstructor>                // false
 * type Ex5 = IsFunction<new (..._: AnyArray) => any>   // false
 * type Ex6 = IsFunction<{ new (..._: AnyArray): any }> // false
 * ```
 */
export type IsFunction<A> = IsExtension<A, AnyFunction>
