import { describe, expectTypeOf, it } from 'vitest'
import type { GetValue } from '~/object/get-value'

describe('GetValue', () => {
  it('gets the value of a nested key', () => {
    type A = { a: { b: 'c' } }
    type Ex = GetValue<A, 'a.b'>

    expectTypeOf<Ex>().toEqualTypeOf<'c'>()
  })

  it('gets the value of a nested key with a custom separator', () => {
    type A = { a: { b: 'c' } }
    type Ex = GetValue<A, 'a:b', ':'>

    expectTypeOf<Ex>().toEqualTypeOf<'c'>()
  })
})
