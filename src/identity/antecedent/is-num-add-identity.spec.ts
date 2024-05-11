import { describe, expectTypeOf, it } from 'vitest'
import { IsNumAddIdentity } from './is-num-add-identity'

describe('IsNumAddIdentity', () => {
  it('should evaluate if the item is 0', () => {
    type Ex1 = IsNumAddIdentity<0>

    expectTypeOf<Ex1>().toEqualTypeOf<true>()
  })

  it('should not match if the item is not 0', () => {
    type Ex1 = IsNumAddIdentity<1>
    type Ex2 = IsNumAddIdentity<-1>

    expectTypeOf<Ex1>().toEqualTypeOf<false>()
    expectTypeOf<Ex2>().toEqualTypeOf<false>()
  })
})
