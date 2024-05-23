import { describe, it } from 'bun:test'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Factory } from '~/function/factory'
import type { Expect } from '~/helper/test'

describe('Factory', () => {
  it('should work without specifying any typeParams', () => {
    type Ex = Factory

    type TestEx = Expect<IsEqual<Ex, () => any>>
  })

  it('should take parameters', () => {
    type A = [number, number, number]
    type Ex = Factory<A>

    type TestEx = Expect<IsEqual<Ex, (...args: A) => any>>
  })

  it('should take a return type', () => {
    type A = { value: string }
    type Ex = Factory<any[], A>

    type TestEx = Expect<IsEqual<Ex, (...args: any[]) => A>>
  })
})
