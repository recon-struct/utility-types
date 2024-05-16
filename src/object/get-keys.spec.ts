import { describe, expectTypeOf, it } from 'vitest'
import type { GetKeys } from '~/object/get-keys'

describe('GetKeys', () => {
  it('returns keys of an object', () => {
    type A = { a: string; b: number }
    type Ex = GetKeys<A>

    expectTypeOf<Ex>().toEqualTypeOf<'a' | 'b'>()
  })

  it('returns keys of an object joined on `.` by default', () => {
    type A = { a: { b: string }; c: string }
    type Ex = GetKeys<A>

    expectTypeOf<Ex>().toEqualTypeOf<'a.b' | 'c'>()
  })

  it('returns keys of an object joined on `:` when `D` is `:`', () => {
    type A = { a: { b: string }; c: string }
    type Ex = GetKeys<A, ':'>

    expectTypeOf<Ex>().toEqualTypeOf<'a:b' | 'c'>()
  })
})
