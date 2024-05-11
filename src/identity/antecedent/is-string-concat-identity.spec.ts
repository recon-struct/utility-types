import { describe, expectTypeOf, it } from 'vitest'
import { IsStringConcatIdentity } from './is-string-concat-identity'

describe('IsStringConcatIdentity', () => {
  it('should evaluate if the item is an empty string', () => {
    type Ex1 = IsStringConcatIdentity<''>

    expectTypeOf<Ex1>().toEqualTypeOf<true>()
  })

  it('should not match if the item is not an empty string', () => {
    type Ex1 = IsStringConcatIdentity<any>
    type Ex2 = IsStringConcatIdentity<'a'>

    expectTypeOf<Ex1>().toEqualTypeOf<false>()
    expectTypeOf<Ex2>().toEqualTypeOf<false>()
  })
})
