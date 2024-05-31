import type { IsZero } from './is-zero'

export type IsPositive<A extends number | bigint> =
  IsZero<A> extends true
    ? false
    : `${A}` extends `-${number | bigint}`
      ? false
      : true
