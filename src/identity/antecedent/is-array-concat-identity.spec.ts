import { describe, expectTypeOf, it } from 'vitest'
import { IsArrayConcatIdentity } from './is-array-concat-identity'

describe('IsArrayConcatIdentity', () => {
  it('should evaluate if the item is an empty array', () => {
    type Ex1 = IsArrayConcatIdentity<[]>

    expectTypeOf<Ex1>().toEqualTypeOf<true>()
  })

  it('should not match if the item is not an empty array', () => {
    type Ex1 = IsArrayConcatIdentity<any[]>
    type Ex2 = IsArrayConcatIdentity<[any]>

    expectTypeOf<Ex1>().toEqualTypeOf<false>()
    expectTypeOf<Ex2>().toEqualTypeOf<false>()
  })
})
