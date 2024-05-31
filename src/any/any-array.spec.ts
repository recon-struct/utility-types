import type { AnyArray } from '~/any/any-array'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'

describe('AnyArray', () => {
  it('should equal any[]', () => {
    type Ex = AnyArray

    type TestEx = Expect<IsEqual<Ex, any[] | readonly any[]>>
  })

  it('should create an array of type A', () => {
    type Ex1 = AnyArray<number>
    type Ex2 = AnyArray<string>
    type Ex3 = AnyArray<boolean>

    type TestEx1 = Expect<IsEqual<Ex1, number[] | readonly number[]>>
    type TestEx2 = Expect<IsEqual<Ex2, string[] | readonly string[]>>
    type TestEx3 = Expect<IsEqual<Ex3, boolean[] | readonly boolean[]>>
  })
})
