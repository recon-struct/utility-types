import { describe, expectTypeOf, it } from 'vitest'
import { IsFloat } from './is-float'

describe('IsFloat', () => {
  it('should return true for floating point numbers', () => {
    type Ex1 = IsFloat<0.1>
    type Ex2 = IsFloat<1.1>
    type Ex3 = IsFloat<1.1e100>
    type Ex4 = IsFloat<1.1e-100>
    type Ex5 = IsFloat<1.1e100>
    type Ex6 = IsFloat<-1.1>
    type Ex7 = IsFloat<-1.1e100>
    type Ex8 = IsFloat<-1.1e-100>
    type Ex9 = IsFloat<-1.1e100>

    expectTypeOf<Ex1>().toEqualTypeOf<true>()
    expectTypeOf<Ex2>().toEqualTypeOf<true>()
    expectTypeOf<Ex3>().toEqualTypeOf<true>()
    expectTypeOf<Ex4>().toEqualTypeOf<true>()
    expectTypeOf<Ex5>().toEqualTypeOf<true>()
    expectTypeOf<Ex6>().toEqualTypeOf<true>()
    expectTypeOf<Ex7>().toEqualTypeOf<true>()
    expectTypeOf<Ex8>().toEqualTypeOf<true>()
    expectTypeOf<Ex9>().toEqualTypeOf<true>()
  })
})
