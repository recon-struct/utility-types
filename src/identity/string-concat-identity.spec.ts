import { describe, expectTypeOf, it } from 'vitest'
import { StringConcatIdentity } from './string-concat-identity'

describe('StringConcatIdentity', () => {
  it('should equal ""', () => {
    expectTypeOf<StringConcatIdentity>().toEqualTypeOf<''>()
  })
})
