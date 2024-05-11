import { describe, expectTypeOf, it } from 'vitest'
import { IsNatural } from './is-natural'

describe('IsNatural', () => {
  it('should return true for natural numbers', () => {
    type Ex1 = IsNatural<0>
    type Ex2 = IsNatural<1>
    type Ex3 = IsNatural<2>

    expectTypeOf<Ex1>().toEqualTypeOf<true>()
    expectTypeOf<Ex2>().toEqualTypeOf<true>()
    expectTypeOf<Ex3>().toEqualTypeOf<true>()
  })

  it('should return false for negative numbers', () => {
    type Ex1 = IsNatural<-1>
    type Ex2 = IsNatural<-2>

    expectTypeOf<Ex1>().toEqualTypeOf<false>()
    expectTypeOf<Ex2>().toEqualTypeOf<false>()
  })

  it('should return false for floating point numbers', () => {
    type Ex1 = IsNatural<0.1>
    type Ex2 = IsNatural<1.1>
    type Ex3 = IsNatural<1.1e100>
    type Ex4 = IsNatural<1.1e-100>
    type Ex5 = IsNatural<1.1e100>
    type Ex6 = IsNatural<-1.1>
    type Ex7 = IsNatural<-1.1e100>
    type Ex8 = IsNatural<-1.1e-100>
    type Ex9 = IsNatural<-1.1e100>

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
