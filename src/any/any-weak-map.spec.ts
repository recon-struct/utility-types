import { describe, expectTypeOf, it } from 'vitest'
import type { AnyWeakMap } from '~/any/any-weak-map'

describe('AnyWeakMap', () => {
  it('should be a WeakMap of any type', () => {
    expectTypeOf<AnyWeakMap>().toEqualTypeOf<WeakMap<object, any>>()
  })

  it('should be a WeakMap of type A', () => {
    type Ex1 = AnyWeakMap<{ a: string }>
    type Ex2 = AnyWeakMap<{ b: number }>
    type Ex3 = AnyWeakMap<{ c: boolean }>

    expectTypeOf<Ex1>().toEqualTypeOf<WeakMap<{ a: string }, any>>()
    expectTypeOf<Ex2>().toEqualTypeOf<WeakMap<{ b: number }, any>>()
    expectTypeOf<Ex3>().toEqualTypeOf<WeakMap<{ c: boolean }, any>>()
  })

  it('should be a WeakMap of type A and B', () => {
    type Ex1 = AnyWeakMap<{ a: string }, string>
    type Ex2 = AnyWeakMap<{ b: number }, boolean>
    type Ex3 = AnyWeakMap<{ c: boolean }, number>

    expectTypeOf<Ex1>().toEqualTypeOf<WeakMap<{ a: string }, string>>()
    expectTypeOf<Ex2>().toEqualTypeOf<WeakMap<{ b: number }, boolean>>()
    expectTypeOf<Ex3>().toEqualTypeOf<WeakMap<{ c: boolean }, number>>()
  })
})
