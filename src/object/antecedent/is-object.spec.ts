import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { IsObject } from '~/object/antecedent/is-object'

describe('IsObject', () => {
  it('should return true if A extends AnyObject', () => {
    type Ex1 = IsObject<{ a: true }>
    type Ex2 = IsObject<[1, 2, 3]>
    type Ex3 = IsObject<string[]>
    type Ex4 = IsObject<Array<string | number>>
    type Ex5 = IsObject<() => void>

    type TestEx1 = Expect<IsEqual<Ex1, true>>
    type TestEx2 = Expect<IsEqual<Ex2, true>>
    type TestEx3 = Expect<IsEqual<Ex3, true>>
    type TestEx4 = Expect<IsEqual<Ex4, true>>
    type TestEx5 = Expect<IsEqual<Ex5, true>>
  })

  it('should return false if A does not extend AnyObject', () => {
    type Ex = IsObject<boolean>

    type TestEx = Expect<IsEqual<Ex, false>>
  })
})
