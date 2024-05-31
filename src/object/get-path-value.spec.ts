import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { GetPathValue } from '~/object/get-path-value'

describe('GetPathValue', () => {
  it('should get the value at a given path in an object', () => {
    type Obj = { a: { b: 'c' }; d: 'e' }
    type Ex1 = GetPathValue<Obj, ['a', 'b']> // 'c'
    type Ex2 = GetPathValue<Obj, ['d']> // 'e'
    type Ex3 = GetPathValue<Obj, ['a']> // 'c'

    type TestEx1 = Expect<IsEqual<Ex1, 'c'>>
    type TestEx2 = Expect<IsEqual<Ex2, 'e'>>
    type TestEx3 = Expect<IsEqual<Ex3, { b: 'c' }>>
  })

  it('should return undefined if the path does not exist', () => {
    type Obj = { a: { b: 'c' } }
    type Ex1 = GetPathValue<Obj, ['z']> // undefined

    type TestEx1 = Expect<IsEqual<Ex1, undefined>>
  })
})
