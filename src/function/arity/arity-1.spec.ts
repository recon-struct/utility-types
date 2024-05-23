import { describe, it } from 'bun:test'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Arity1 } from '~/function/arity/arity-1'
import type { Expect } from '~/helper/test'
import type { Arity0 } from './arity-0'

describe('Arity1', () => {
  it('should be a function with 1 parameter', () => {
    type Ex = Arity0<1>

    type TestEx = Expect<IsEqual<Ex, () => 1>>
  })

  it('should return a value of type B', () => {
    type A = 'A'
    type B = 'B'
    type Ex = Arity1<A, B>

    type TestEx = Expect<IsEqual<Ex, (a: A) => B>>
  })
})
