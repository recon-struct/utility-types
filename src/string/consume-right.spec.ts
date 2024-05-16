import { describe, expectTypeOf, it } from 'vitest'
import type { ConsumeRight } from '~/string/consume-right'

describe('ConsumeRight', () => {
  it('should consume the right side of a string', () => {
    type Ex1 = ConsumeRight<'he', 'hello'>
    type Ex2 = ConsumeRight<'hello', 'helloWorld'>
    type Ex3 = ConsumeRight<'hello1', 'hello123'>

    expectTypeOf<Ex1>().toEqualTypeOf<'llo'>()
    expectTypeOf<Ex2>().toEqualTypeOf<'World'>
    expectTypeOf<Ex3>().toEqualTypeOf<'23'>()
  })
})
