import { describe, expectTypeOf, it } from 'vitest'
import type { ValueOf } from '~/object/value-of'

describe('ValueOf', () => {
  it('returns values of an object', () => {
    type A = { a: string; b: number }
    type Ex = ValueOf<A>

    expectTypeOf<Ex>().toEqualTypeOf<string | number>()
  })

  it('returns values of a Map', () => {
    type A = Map<0 | 1, number>
    type Ex = ValueOf<A>

    expectTypeOf<Ex>().toEqualTypeOf<number>()
  })

  it('returns values of a WeakMap', () => {
    type A = WeakMap<{ a: 1 }, number>
    type Ex = ValueOf<A>

    expectTypeOf<Ex>().toEqualTypeOf<number>()
  })
})
