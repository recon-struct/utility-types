import { describe, expectTypeOf, it } from 'vitest'
import type { IsDivisible } from '~/math/antecedent/is-divisible'

describe('IsDivisible', () => {
  it('should be true', () => {
    type Ex1 = IsDivisible<10, 2>

    expectTypeOf<Ex1>().toEqualTypeOf<true>()
  })

  it('should be false', () => {
    type Ex1 = IsDivisible<10, 3>
    type Ex2 = IsDivisible<10, number>
    type Ex3 = IsDivisible<number, 2>

    expectTypeOf<Ex1>().toEqualTypeOf<false>()
    expectTypeOf<Ex2>().toEqualTypeOf<false>()
    expectTypeOf<Ex3>().toEqualTypeOf<false>()
  })
})
