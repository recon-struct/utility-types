import type { AnyObject } from '~/any/any-object'
import type { AnyWeakSet } from '~/any/any-weak-set'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'

describe('AnyWeakSet', () => {
  it('should be a WeakSet of any type', () => {
    type Ex = AnyWeakSet

    type TestEx = Expect<IsEqual<Ex, WeakSet<AnyObject>>>
  })

  it('should be a WeakSet of type A', () => {
    type Ex1 = AnyWeakSet<{ a: string }>
    type Ex2 = AnyWeakSet<{ b: number }>
    type Ex3 = AnyWeakSet<{ c: boolean }>

    type TestEx1 = Expect<IsEqual<Ex1, WeakSet<{ a: string }>>>
    type TestEx2 = Expect<IsEqual<Ex2, WeakSet<{ b: number }>>>
    type TestEx3 = Expect<IsEqual<Ex3, WeakSet<{ c: boolean }>>>
  })
})
