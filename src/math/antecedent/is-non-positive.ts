import type { IsZero } from './is-zero'

export type IsNonPositive<A extends number | bigint> =
  `${A}` extends `-${number | bigint}` ? true : IsZero<A>
