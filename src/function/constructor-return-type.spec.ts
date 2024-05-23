import { describe, it } from 'bun:test'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { ConstructorReturnType } from '~/function/constructor-return-type'
import type { Expect } from '~/helper/test'

describe('ConstructorReturnType', () => {
  it('should return the type of the constructor', () => {
    class Test {
      constructor(public value: string) {}
    }

    type TestConstructorReturnType = Expect<
      IsEqual<
        ConstructorReturnType<typeof Test>,
        {
          value: string
        }
      >
    >
  })
})
