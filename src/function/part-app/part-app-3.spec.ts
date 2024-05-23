import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { PartApp3 } from '~/function/part-app/part-app-3'
import type { Expect } from '~/helper/test'

describe('PartApp3', () => {
  it('should have 3 parameters', () => {
    type Ex = PartApp3<any, any, any, 1>

    type TestEx = Expect<
      IsEqual<
        Ex,
        | ((a: any, b: any, c: any) => 1)
        | ((a: any, b: any) => (c: any) => 1)
        | ((a: any) => ((b: any, c: any) => 1) | ((b: any) => (c: any) => 1))
      >
    >
  })

  it('should return a value of type D', () => {
    type A = 'A'
    type B = 'B'
    type C = 'C'
    type D = 'D'
    type Ex = PartApp3<A, B, C, D>

    type TestEx = Expect<
      IsEqual<
        Ex,
        | ((a: A, b: B, c: C) => D)
        | ((a: A, b: B) => (c: C) => D)
        | ((a: A) => ((b: B, c: C) => D) | ((b: B) => (c: C) => D))
      >
    >
  })
})
