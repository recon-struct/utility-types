import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { PartApp4 } from '~/function/part-app/part-app-4'
import type { Expect } from '~/helper/test'

describe('PartApp4', () => {
  it('should be a function with 4 parameters', () => {
    type Ex = PartApp4<any, any, any, any, 1>

    type TestEx = Expect<
      IsEqual<
        Ex,
        | ((a: any, b: any, c: any, d: any) => 1)
        | ((a: any, b: any, c: any) => (d: any) => 1)
        | ((
            a: any,
            b: any,
          ) => ((c: any, d: any) => 1) | ((c: any) => (d: any) => 1))
        | ((
            a: any,
          ) =>
            | ((b: any, c: any, d: any) => 1)
            | ((b: any, c: any) => (d: any) => 1)
            | ((
                b: any,
              ) => ((c: any, d: any) => 1) | ((c: any) => (d: any) => 1)))
      >
    >
  })

  it('should return a value of type D', () => {
    type A = 'A'
    type B = 'B'
    type C = 'C'
    type D = 'D'
    type E = 'E'
    type Ex = PartApp4<A, B, C, D, E>

    type TestEx = Expect<
      IsEqual<
        Ex,
        | ((a: A, b: B, c: C, d: D) => E)
        | ((a: A, b: B, c: C) => (d: D) => E)
        | ((a: A, b: B) => ((c: C, d: D) => E) | ((c: C) => (d: D) => E))
        | ((
            a: A,
          ) =>
            | ((b: B, c: C, d: D) => E)
            | ((b: B, c: C) => (d: D) => E)
            | ((b: B) => ((c: C, d: D) => E) | ((c: C) => (d: D) => E)))
      >
    >
  })
})
