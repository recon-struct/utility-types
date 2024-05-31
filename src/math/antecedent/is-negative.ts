/**
 * Determines whether a number or bigint is negative.
 *
 * @typeParam A - The type of the input value.
 * @group Antecedent
 * @group Math
 */
export type IsNegative<A extends number | bigint> =
  `${A}` extends `-${number | bigint}` ? true : false
