import { describe, expectTypeOf, it } from 'vitest'
import type { AnySet } from '~/any/any-set'

describe('AnySet', () => {
  it('should be a Set of any type', () => {
    expectTypeOf<AnySet>().toEqualTypeOf<Set<any>>()
  })

  it('should be a set of type A', () => {
    type Ex1 = AnySet<number>
    type Ex2 = AnySet<string>
    type Ex3 = AnySet<boolean>

    expectTypeOf<Ex1>().toEqualTypeOf<Set<number>>()
    expectTypeOf<Ex2>().toEqualTypeOf<Set<string>>()
    expectTypeOf<Ex3>().toEqualTypeOf<Set<boolean>>()
  })
})
