import { describe, expectTypeOf, it } from 'vitest'
import type { KeyOf } from '~/object/key-of'

describe('KeyOf', () => {
  it('returns keys of an object', () => {
    type A = { a: string; b: number }
    type Ex = KeyOf<A>

    expectTypeOf<Ex>().toEqualTypeOf<'a' | 'b'>()
  })

  it('returns keys of a Map', () => {
    type A = Map<0 | 1, number>
    type Ex = KeyOf<A>

    expectTypeOf<Ex>().toEqualTypeOf<0 | 1>()
  })

  it('returns keys of a WeakMap', () => {
    type A = WeakMap<{ a: 1 }, number>
    type Ex = KeyOf<A>

    expectTypeOf<Ex>().toEqualTypeOf<{ a: 1 }>()
  })
})
