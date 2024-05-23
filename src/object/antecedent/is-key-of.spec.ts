import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { IsKeyOf } from '~/object/antecedent/is-key-of'

describe('IsKeyOf', () => {
  it('should return true if B extends KeyOf<A>', () => {
    type A = { hello: 'World' }
    type Ex = IsKeyOf<A, 'hello'>

    type TestEx = Expect<IsEqual<Ex, true>>
  })

  it('should return false if B does not extend KeyOf<A>', () => {
    type A = { hello: 'World' }
    type Ex = IsKeyOf<A, 42>

    type TestEx = Expect<IsEqual<Ex, false>>
  })
})
