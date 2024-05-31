/**
 * Checks if a number or bigint is non-negative.
 *
 * @typeParam A - The type of the input value.
 * @group Antecedent
 * @group Math
 */
export type IsNonNegative<A extends number | bigint> =
  `${A}` extends `-${number | bigint}` ? false : true
