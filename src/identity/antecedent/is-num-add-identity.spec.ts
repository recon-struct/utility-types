import { describe, it } from 'bun:test'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { IsNumAddIdentity } from '~/identity/antecedent/is-num-add-identity'

describe('IsNumAddIdentity', () => {
  it('should evaluate if the item is 0', () => {
    type Ex1 = IsNumAddIdentity<0>

    type TestEx1 = Expect<IsEqual<Ex1, true>>
  })

  it('should not match if the item is not 0', () => {
    type Ex1 = IsNumAddIdentity<1>
    type Ex2 = IsNumAddIdentity<-1>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
    type TestEx2 = Expect<IsEqual<Ex2, false>>
  })
})
