import type { AnyWeakMap } from '~/any/any-weak-map'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'

describe('AnyWeakMap', () => {
  it('should be a WeakMap of any type', () => {
    type Ex = AnyWeakMap

    type TestEx = Expect<IsEqual<Ex, WeakMap<object, any>>>
  })

  it('should be a WeakMap of type A', () => {
    type Ex1 = AnyWeakMap<{ a: string }>
    type Ex2 = AnyWeakMap<{ b: number }>
    type Ex3 = AnyWeakMap<{ c: boolean }>

    type TestEx1 = Expect<IsEqual<Ex1, WeakMap<{ a: string }, any>>>
    type TestEx2 = Expect<IsEqual<Ex2, WeakMap<{ b: number }, any>>>
    type TestEx3 = Expect<IsEqual<Ex3, WeakMap<{ c: boolean }, any>>>
  })

  it('should be a WeakMap of type A and B', () => {
    type Ex1 = AnyWeakMap<{ a: string }, string>
    type Ex2 = AnyWeakMap<{ b: number }, boolean>
    type Ex3 = AnyWeakMap<{ c: boolean }, number>

    type TestEx1 = Expect<IsEqual<Ex1, WeakMap<{ a: string }, string>>>
    type TestEx2 = Expect<IsEqual<Ex2, WeakMap<{ b: number }, boolean>>>
    type TestEx3 = Expect<IsEqual<Ex3, WeakMap<{ c: boolean }, number>>>
  })
})
