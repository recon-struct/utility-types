import type { AnyMap } from '~/any/any-map'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'

describe('AnyMap', () => {
  it('should equal Map<any, any>', () => {
    type Ex = AnyMap

    type TestEx = Expect<IsEqual<Ex, Map<any, any>>>
  })

  it('should create a map with keys of type K and values of any', () => {
    type Ex1 = AnyMap<number>
    type Ex2 = AnyMap<string>
    type Ex3 = AnyMap<boolean>

    type TestEx1 = Expect<IsEqual<Ex1, Map<number, any>>>
    type TestEx2 = Expect<IsEqual<Ex2, Map<string, any>>>
    type TestEx3 = Expect<IsEqual<Ex3, Map<boolean, any>>>
  })

  it('should create a map with keys of type K and values of type V', () => {
    type Ex1 = AnyMap<number, string>
    type Ex2 = AnyMap<string, boolean>
    type Ex3 = AnyMap<boolean, number>

    type TestEx1 = Expect<IsEqual<Ex1, Map<number, string>>>
    type TestEx2 = Expect<IsEqual<Ex2, Map<string, boolean>>>
    type TestEx3 = Expect<IsEqual<Ex3, Map<boolean, number>>>
  })
})
