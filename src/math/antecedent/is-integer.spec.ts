import { describe, expectTypeOf, it } from 'vitest'
import type { IsInteger } from '~/math/antecedent/is-integer'

describe('IsInteger', () => {
  it('should return true for integers', () => {
    type Ex1 = IsInteger<1>
    type Ex2 = IsInteger<0>
    type Ex3 = IsInteger<-1>

    expectTypeOf<Ex1>().toEqualTypeOf<true>()
    expectTypeOf<Ex2>().toEqualTypeOf<true>()
    expectTypeOf<Ex3>().toEqualTypeOf<true>()
  })

  it('should return false for floating point numbers', () => {
    type Ex1 = IsInteger<0.1>
    type Ex2 = IsInteger<1.1>
    type Ex3 = IsInteger<1.1e100>
    type Ex4 = IsInteger<1.1e-100>
    type Ex5 = IsInteger<1.1e100>
    type Ex6 = IsInteger<-1.1>
    type Ex7 = IsInteger<-1.1e100>
    type Ex8 = IsInteger<-1.1e-100>
    type Ex9 = IsInteger<-1.1e100>

    expectTypeOf<Ex1>().toEqualTypeOf<false>()
    expectTypeOf<Ex2>().toEqualTypeOf<false>()
    expectTypeOf<Ex3>().toEqualTypeOf<false>()
    expectTypeOf<Ex4>().toEqualTypeOf<false>()
    expectTypeOf<Ex5>().toEqualTypeOf<false>()
    expectTypeOf<Ex6>().toEqualTypeOf<false>()
    expectTypeOf<Ex7>().toEqualTypeOf<false>()
    expectTypeOf<Ex8>().toEqualTypeOf<false>()
    expectTypeOf<Ex9>().toEqualTypeOf<false>()
  })
})
