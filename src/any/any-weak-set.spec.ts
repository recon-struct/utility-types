import { describe, expectTypeOf, it } from 'vitest'
import type { AnyObject } from '~/any/any-object'
import type { AnyWeakSet } from '~/any/any-weak-set'

describe('AnyWeakSet', () => {
  it('should be a WeakSet of any type', () => {
    expectTypeOf<AnyWeakSet>().toEqualTypeOf<WeakSet<AnyObject>>()
  })

  it('should be a WeakSet of type A', () => {
    type Ex1 = AnyWeakSet<{ a: string }>
    type Ex2 = AnyWeakSet<{ b: number }>
    type Ex3 = AnyWeakSet<{ c: boolean }>

    expectTypeOf<Ex1>().toEqualTypeOf<WeakSet<{ a: string }>>()
    expectTypeOf<Ex2>().toEqualTypeOf<WeakSet<{ b: number }>>()
    expectTypeOf<Ex3>().toEqualTypeOf<WeakSet<{ c: boolean }>>()
  })
})
