import type { AnyStringish } from '~/any/any-stringish'
import type { ToString } from '~/any/to-string'
import type { ToStringInterface } from '~/helpers/to-string-interface'
import type { IsEmptyString } from '~/identity/antecedent'
import type { If } from '~/logic/if'

export interface JoinOpts<A extends string = string> {
  value: A
}

export type StringLike = AnyStringish | ToStringInterface

/**
 * Join a tuple of templatables `A` on a templatable `B`
 * @typeParam A - The tuple of templatables to join.
 * @typeParam B - The templatable to join on.
 * @group String
 * @example
 * ```
 * type Ex1 = Join<['a', 'b']>                      // 'ab'
 * type Ex2 = Join<['a', 'b'], '.'>                 // 'a.b'
 * type Ex3 = Join<['a', null], '.'>                // 'a.null'
 * type Ex4 = Join<[null, 'b'], '.'>                // 'null.b'
 * type Ex5 = Join<['a', 'b'], { toString(): '/' }> // 'a/b'
 * ```
 */
export type Join<
  A extends StringLike[],
  B extends StringLike = '',
  C extends JoinOpts = JoinOpts<''>,
> = A extends [infer D, ...infer E]
  ? D extends StringLike
    ? E extends StringLike[]
      ? Join<
          E,
          B,
          JoinOpts<
            If<
              IsEmptyString<C['value']>,
              ToString<D>,
              `${C['value']}${ToString<B>}${ToString<D>}`
            >
          >
        >
      : never
    : never
  : C['value']
