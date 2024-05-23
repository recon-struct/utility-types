import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { PartApp6 } from '~/function/part-app/part-app-6'
import type { Expect } from '~/helper/test'

describe('PartApp6', () => {
  it('should be a function with 6 parameters', () => {
    type Ex = PartApp6<any, any, any, any, any, any, 1>

    type TestEx = Expect<
      IsEqual<
        Ex,
        | ((a: any, b: any, c: any, d: any, e: any, f: any) => 1)
        | ((a: any, b: any, c: any, d: any, e: any) => (f: any) => 1)
        | ((
            a: any,
            b: any,
            c: any,
            d: any,
          ) => ((e: any, f: any) => 1) | ((e: any) => (f: any) => 1))
        | ((
            a: any,
            b: any,
            c: any,
          ) =>
            | ((d: any, e: any, f: any) => 1)
            | ((d: any, e: any) => (f: any) => 1)
            | ((
                d: any,
              ) => ((e: any, f: any) => 1) | ((e: any) => (f: any) => 1)))
        | ((
            a: any,
            b: any,
          ) =>
            | ((c: any, d: any, e: any, f: any) => 1)
            | ((c: any, d: any, e: any) => (f: any) => 1)
            | ((
                c: any,
                d: any,
              ) => ((e: any, f: any) => 1) | ((e: any) => (f: any) => 1))
            | ((
                c: any,
              ) =>
                | ((d: any, e: any, f: any) => 1)
                | ((d: any, e: any) => (f: any) => 1)
                | ((
                    d: any,
                  ) => ((e: any, f: any) => 1) | ((e: any) => (f: any) => 1))))
        | ((
            a: any,
          ) =>
            | ((b: any, c: any, d: any, e: any, f: any) => 1)
            | ((b: any, c: any, d: any, e: any) => (f: any) => 1)
            | ((
                b: any,
                c: any,
                d: any,
              ) => ((e: any, f: any) => 1) | ((e: any) => (f: any) => 1))
            | ((
                b: any,
                c: any,
              ) =>
                | ((d: any, e: any, f: any) => 1)
                | ((d: any, e: any) => (f: any) => 1)
                | ((
                    d: any,
                  ) => ((e: any, f: any) => 1) | ((e: any) => (f: any) => 1)))
            | ((
                b: any,
              ) =>
                | ((c: any, d: any, e: any, f: any) => 1)
                | ((c: any, d: any, e: any) => (f: any) => 1)
                | ((
                    c: any,
                    d: any,
                  ) => ((e: any, f: any) => 1) | ((e: any) => (f: any) => 1))
                | ((
                    c: any,
                  ) =>
                    | ((d: any, e: any, f: any) => 1)
                    | ((d: any, e: any) => (f: any) => 1)
                    | ((
                        d: any,
                      ) =>
                        | ((e: any, f: any) => 1)
                        | ((e: any) => (f: any) => 1)))))
      >
    >
  })

  it('should return a value of type G', () => {
    type A = 'A'
    type B = 'B'
    type C = 'C'
    type D = 'D'
    type E = 'E'
    type F = 'F'
    type G = 'G'
    type Ex = PartApp6<A, B, C, D, E, F, G>

    type TestEx = Expect<
      IsEqual<
        Ex,
        | ((a: A, b: B, c: C, d: D, e: E, f: F) => G)
        | ((a: A, b: B, c: C, d: D, e: E) => (f: F) => G)
        | ((
            a: A,
            b: B,
            c: C,
            d: D,
          ) => ((e: E, f: F) => G) | ((e: E) => (f: F) => G))
        | ((
            a: A,
            b: B,
            c: C,
          ) =>
            | ((d: D, e: E, f: F) => G)
            | ((d: D, e: E) => (f: F) => G)
            | ((d: D) => ((e: E, f: F) => G) | ((e: E) => (f: F) => G)))
        | ((
            a: A,
            b: B,
          ) =>
            | ((c: C, d: D, e: E, f: F) => G)
            | ((c: C, d: D, e: E) => (f: F) => G)
            | ((c: C, d: D) => ((e: E, f: F) => G) | ((e: E) => (f: F) => G))
            | ((
                c: C,
              ) =>
                | ((d: D, e: E, f: F) => G)
                | ((d: D, e: E) => (f: F) => G)
                | ((d: D) => ((e: E, f: F) => G) | ((e: E) => (f: F) => G))))
        | ((
            a: A,
          ) =>
            | ((b: B, c: C, d: D, e: E, f: F) => G)
            | ((b: B, c: C, d: D, e: E) => (f: F) => G)
            | ((
                b: B,
                c: C,
                d: D,
              ) => ((e: E, f: F) => G) | ((e: E) => (f: F) => G))
            | ((
                b: B,
                c: C,
              ) =>
                | ((d: D, e: E, f: F) => G)
                | ((d: D, e: E) => (f: F) => G)
                | ((d: D) => ((e: E, f: F) => G) | ((e: E) => (f: F) => G)))
            | ((
                b: B,
              ) =>
                | ((c: C, d: D, e: E, f: F) => G)
                | ((c: C, d: D, e: E) => (f: F) => G)
                | ((
                    c: C,
                    d: D,
                  ) => ((e: E, f: F) => G) | ((e: E) => (f: F) => G))
                | ((
                    c: C,
                  ) =>
                    | ((d: D, e: E, f: F) => G)
                    | ((d: D, e: E) => (f: F) => G)
                    | ((
                        d: D,
                      ) => ((e: E, f: F) => G) | ((e: E) => (f: F) => G)))))
      >
    >
  })
})
