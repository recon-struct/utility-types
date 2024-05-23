import { describe, it } from 'bun:test'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Arity3 } from '~/function/arity/arity-3'
import type { Expect } from '~/helper/test'

describe('Arity3', () => {
  it('should be a function with 3 parameters', () => {
    type Ex = Arity3<any, any, any, 1>

    type TestEx = Expect<IsEqual<Ex, (a: any, b: any, c: any) => 1>>
  })

  it('should return a value of type D', () => {
    type A = 'A'
    type B = 'B'
    type C = 'C'
    type D = 'D'
    type Ex = Arity3<A, B, C, D>

    type TestEx = Expect<IsEqual<Ex, (a: A, b: B, c: C) => D>>
  })
})
