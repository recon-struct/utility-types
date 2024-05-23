import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { PartApp5 } from '~/function/part-app/part-app-5'
import type { Expect } from '~/helper/test'

describe('PartApp5', () => {
  it('should be a function with 5 parameters', () => {
    type Ex = PartApp5<any, any, any, any, any, 1>

    type TestEx = Expect<
      IsEqual<
        Ex,
        | ((a: any, b: any, c: any, d: any, e: any) => 1)
        | ((a: any, b: any, c: any, d: any) => (e: any) => 1)
        | ((
            a: any,
            b: any,
            c: any,
          ) => ((d: any, e: any) => 1) | ((d: any) => (e: any) => 1))
        | ((
            a: any,
            b: any,
          ) =>
            | ((c: any, d: any, e: any) => 1)
            | ((c: any, d: any) => (e: any) => 1)
            | ((
                c: any,
              ) => ((d: any, e: any) => 1) | ((d: any) => (e: any) => 1)))
        | ((
            a: any,
          ) =>
            | ((b: any, c: any, d: any, e: any) => 1)
            | ((b: any, c: any, d: any) => (e: any) => 1)
            | ((
                b: any,
                c: any,
              ) => ((d: any, e: any) => 1) | ((d: any) => (e: any) => 1))
            | ((
                b: any,
              ) =>
                | ((c: any, d: any, e: any) => 1)
                | ((c: any, d: any) => (e: any) => 1)
                | ((
                    c: any,
                  ) => ((d: any, e: any) => 1) | ((d: any) => (e: any) => 1))))
      >
    >
  })

  it('should return a value of type F', () => {
    type A = 'A'
    type B = 'B'
    type C = 'C'
    type D = 'D'
    type E = 'E'
    type F = 'F'
    type Ex = PartApp5<A, B, C, D, E, F>

    type TestEx = Expect<
      IsEqual<
        Ex,
        | ((a: A, b: B, c: C, d: D, e: E) => F)
        | ((a: A, b: B, c: C, d: D) => (e: E) => F)
        | ((a: A, b: B, c: C) => ((d: D, e: E) => F) | ((d: D) => (e: E) => F))
        | ((
            a: A,
            b: B,
          ) =>
            | ((c: C, d: D, e: E) => F)
            | ((c: C, d: D) => (e: E) => F)
            | ((c: C) => ((d: D, e: E) => F) | ((d: D) => (e: E) => F)))
        | ((
            a: A,
          ) =>
            | ((b: B, c: C, d: D, e: E) => F)
            | ((b: B, c: C, d: D) => (e: E) => F)
            | ((b: B, c: C) => ((d: D, e: E) => F) | ((d: D) => (e: E) => F))
            | ((
                b: B,
              ) =>
                | ((c: C, d: D, e: E) => F)
                | ((c: C, d: D) => (e: E) => F)
                | ((c: C) => ((d: D, e: E) => F) | ((d: D) => (e: E) => F))))
      >
    >
  })
})
