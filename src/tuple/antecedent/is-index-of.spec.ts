import { describe, it } from 'bun:test'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { IsIndexOf } from '~/tuple/antecedent/is-index-of'

describe('IsIndexOf', () => {
  it('should be true if B extends IndexOf<A>', () => {
    type Ex1 = IsIndexOf<[1, 2, 3], 2> // true
    type TestEx1 = Expect<IsEqual<Ex1, true>>
  })

  it('should be false if B does not extend IndexOf<A>', () => {
    type Ex2 = IsIndexOf<[], 1> // false
    type TestEx2 = Expect<IsEqual<Ex2, false>>
  })
})
