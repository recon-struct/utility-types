import { describe, expectTypeOf, it } from 'vitest'
import type { ConsumeLeft } from '~/string/consume-left'

describe('ConsumeLeft', () => {
  it('should consume the left side of a string', () => {
    type Ex1 = ConsumeLeft<'llo', 'hello'>
    type Ex2 = ConsumeLeft<'World', 'helloWorld'>
    type Ex3 = ConsumeLeft<'23', 'hello123'>

    expectTypeOf<Ex1>().toEqualTypeOf<'he'>()
    expectTypeOf<Ex2>().toEqualTypeOf<'hello'>()
    expectTypeOf<Ex3>().toEqualTypeOf<'hello1'>()
  })
})
