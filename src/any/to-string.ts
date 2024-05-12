import type { AnyStringish } from '~/any/any-stringish'
import type { HelperToStringInterface } from '~/helper/to-string-interface'

export type ToString<A> = A extends AnyStringish
  ? `${A}`
  : A extends HelperToStringInterface
    ? ReturnType<A['toString']>
    : never
