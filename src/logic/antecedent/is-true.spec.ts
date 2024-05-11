import { describe, expectTypeOf, it } from 'vitest'
import { IsTrue } from './is-true'

describe('IsTrue', () => {
  it('should evaluate `A`', () => {
    type Ex1 = IsTrue<true>
    type Ex2 = IsTrue<false>

    expectTypeOf<Ex1>().toEqualTypeOf<true>()
    expectTypeOf<Ex2>().toEqualTypeOf<false>()
  })
})
