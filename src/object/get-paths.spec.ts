import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { GetPaths } from '~/object/get-paths'

describe('GetPaths', () => {
  it('should return the paths of nested properties', () => {
    type Ex1 = GetPaths<{ a: { b: 'c' } }> // ['a', 'b']
    type Ex2 = GetPaths<{ a: { b: 'c' }; d: 'e' }> // ['a', 'b'] | ['d']

    type TestEx1 = Expect<IsEqual<Ex1, ['a', 'b']>>
    type TestEx2 = Expect<IsEqual<Ex2, ['a', 'b'] | ['d']>>
  })
})
