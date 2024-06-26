import type { AnyStringish } from '~/any/any-stringish'
import type { ToStringInterface } from '~/helper/to-string-interface'

export type ToString<A> = A extends AnyStringish
  ? `${A}`
  : A extends ToStringInterface
    ? ReturnType<A['toString']>
    : never
