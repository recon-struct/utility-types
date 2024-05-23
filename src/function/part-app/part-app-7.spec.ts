import { describe, it } from 'bun:test'
import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { PartApp7 } from '~/function/part-app/part-app-7'
import type { Expect } from '~/helper/test'

describe('PartApp6', () => {
  it('should be a function with 7 parameters', () => {
    type Ex = PartApp7<any, any, any, any, any, any, any, 1>

    type TestEx = Expect<
      IsEqual<
        Ex,
        | ((a: any, b: any, c: any, d: any, e: any, f: any, g: any) => 1)
        | ((a: any, b: any, c: any, d: any, e: any, f: any) => (g: any) => 1)
        | ((
            a: any,
            b: any,
            c: any,
            d: any,
            e: any,
          ) => ((f: any, g: any) => 1) | ((f: any) => (g: any) => 1))
        | ((
            a: any,
            b: any,
            c: any,
            d: any,
          ) =>
            | ((e: any, f: any, g: any) => 1)
            | ((e: any, f: any) => (g: any) => 1)
            | ((
                e: any,
              ) => ((f: any, g: any) => 1) | ((f: any) => (g: any) => 1)))
        | ((
            a: any,
            b: any,
            c: any,
          ) =>
            | ((d: any, e: any, f: any, g: any) => 1)
            | ((d: any, e: any, f: any) => (g: any) => 1)
            | ((
                d: any,
                e: any,
              ) => ((f: any, g: any) => 1) | ((f: any) => (g: any) => 1))
            | ((
                d: any,
              ) =>
                | ((e: any, f: any, g: any) => 1)
                | ((e: any, f: any) => (g: any) => 1)
                | ((
                    e: any,
                  ) => ((f: any, g: any) => 1) | ((f: any) => (g: any) => 1))))
        | ((
            a: any,
            b: any,
          ) =>
            | ((c: any, d: any, e: any, f: any, g: any) => 1)
            | ((c: any, d: any, e: any, f: any) => (g: any) => 1)
            | ((
                c: any,
                d: any,
                e: any,
              ) => ((f: any, g: any) => 1) | ((f: any) => (g: any) => 1))
            | ((
                c: any,
                d: any,
              ) =>
                | ((e: any, f: any, g: any) => 1)
                | ((e: any, f: any) => (g: any) => 1)
                | ((
                    e: any,
                  ) => ((f: any, g: any) => 1) | ((f: any) => (g: any) => 1)))
            | ((
                c: any,
              ) =>
                | ((d: any, e: any, f: any, g: any) => 1)
                | ((d: any, e: any, f: any) => (g: any) => 1)
                | ((
                    d: any,
                    e: any,
                  ) => ((f: any, g: any) => 1) | ((f: any) => (g: any) => 1))
                | ((
                    d: any,
                  ) =>
                    | ((e: any, f: any, g: any) => 1)
                    | ((e: any, f: any) => (g: any) => 1)
                    | ((
                        e: any,
                      ) =>
                        | ((f: any, g: any) => 1)
                        | ((f: any) => (g: any) => 1)))))
        | ((
            a: any,
          ) =>
            | ((b: any, c: any, d: any, e: any, f: any, g: any) => 1)
            | ((b: any, c: any, d: any, e: any, f: any) => (g: any) => 1)
            | ((
                b: any,
                c: any,
                d: any,
                e: any,
              ) => ((f: any, g: any) => 1) | ((f: any) => (g: any) => 1))
            | ((
                b: any,
                c: any,
                d: any,
              ) =>
                | ((e: any, f: any, g: any) => 1)
                | ((e: any, f: any) => (g: any) => 1)
                | ((
                    e: any,
                  ) => ((f: any, g: any) => 1) | ((f: any) => (g: any) => 1)))
            | ((
                b: any,
                c: any,
              ) =>
                | ((d: any, e: any, f: any, g: any) => 1)
                | ((d: any, e: any, f: any) => (g: any) => 1)
                | ((
                    d: any,
                    e: any,
                  ) => ((f: any, g: any) => 1) | ((f: any) => (g: any) => 1))
                | ((
                    d: any,
                  ) =>
                    | ((e: any, f: any, g: any) => 1)
                    | ((e: any, f: any) => (g: any) => 1)
                    | ((
                        e: any,
                      ) =>
                        | ((f: any, g: any) => 1)
                        | ((f: any) => (g: any) => 1))))
            | ((
                b: any,
              ) =>
                | ((c: any, d: any, e: any, f: any, g: any) => 1)
                | ((c: any, d: any, e: any, f: any) => (g: any) => 1)
                | ((
                    c: any,
                    d: any,
                    e: any,
                  ) => ((f: any, g: any) => 1) | ((f: any) => (g: any) => 1))
                | ((
                    c: any,
                    d: any,
                  ) =>
                    | ((e: any, f: any, g: any) => 1)
                    | ((e: any, f: any) => (g: any) => 1)
                    | ((
                        e: any,
                      ) =>
                        | ((f: any, g: any) => 1)
                        | ((f: any) => (g: any) => 1)))
                | ((
                    c: any,
                  ) =>
                    | ((d: any, e: any, f: any, g: any) => 1)
                    | ((d: any, e: any, f: any) => (g: any) => 1)
                    | ((
                        d: any,
                        e: any,
                      ) =>
                        | ((f: any, g: any) => 1)
                        | ((f: any) => (g: any) => 1))
                    | ((
                        d: any,
                      ) =>
                        | ((e: any, f: any, g: any) => 1)
                        | ((e: any, f: any) => (g: any) => 1)
                        | ((
                            e: any,
                          ) =>
                            | ((f: any, g: any) => 1)
                            | ((f: any) => (g: any) => 1))))))
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
    type H = 'H'
    type Ex = PartApp7<A, B, C, D, E, F, G, H>

    type TestExec = Expect<
      IsEqual<
        Ex,
        | ((a: A, b: B, c: C, d: D, e: E, f: F, g: G) => H)
        | ((a: A, b: B, c: C, d: D, e: E, f: F) => (g: G) => H)
        | ((
            a: A,
            b: B,
            c: C,
            d: D,
            e: E,
          ) => ((f: F, g: G) => H) | ((f: F) => (g: G) => H))
        | ((
            a: A,
            b: B,
            c: C,
            d: D,
          ) =>
            | ((e: E, f: F, g: G) => H)
            | ((e: E, f: F) => (g: G) => H)
            | ((e: E) => ((f: F, g: G) => H) | ((f: F) => (g: G) => H)))
        | ((
            a: A,
            b: B,
            c: C,
          ) =>
            | ((d: D, e: E, f: F, g: G) => H)
            | ((d: D, e: E, f: F) => (g: G) => H)
            | ((d: D, e: E) => ((f: F, g: G) => H) | ((f: F) => (g: G) => H))
            | ((
                d: D,
              ) =>
                | ((e: E, f: F, g: G) => H)
                | ((e: E, f: F) => (g: G) => H)
                | ((e: E) => ((f: F, g: G) => H) | ((f: F) => (g: G) => H))))
        | ((
            a: A,
            b: B,
          ) =>
            | ((c: C, d: D, e: E, f: F, g: G) => H)
            | ((c: C, d: D, e: E, f: F) => (g: G) => H)
            | ((
                c: C,
                d: D,
                e: E,
              ) => ((f: F, g: G) => H) | ((f: F) => (g: G) => H))
            | ((
                c: C,
                d: D,
              ) =>
                | ((e: E, f: F, g: G) => H)
                | ((e: E, f: F) => (g: G) => H)
                | ((e: E) => ((f: F, g: G) => H) | ((f: F) => (g: G) => H)))
            | ((
                c: C,
              ) =>
                | ((d: D, e: E, f: F, g: G) => H)
                | ((d: D, e: E, f: F) => (g: G) => H)
                | ((
                    d: D,
                    e: E,
                  ) => ((f: F, g: G) => H) | ((f: F) => (g: G) => H))
                | ((
                    d: D,
                  ) =>
                    | ((e: E, f: F, g: G) => H)
                    | ((e: E, f: F) => (g: G) => H)
                    | ((
                        e: E,
                      ) => ((f: F, g: G) => H) | ((f: F) => (g: G) => H)))))
        | ((
            a: A,
          ) =>
            | ((b: B, c: C, d: D, e: E, f: F, g: G) => H)
            | ((b: B, c: C, d: D, e: E, f: F) => (g: G) => H)
            | ((
                b: B,
                c: C,
                d: D,
                e: E,
              ) => ((f: F, g: G) => H) | ((f: F) => (g: G) => H))
            | ((
                b: B,
                c: C,
                d: D,
              ) =>
                | ((e: E, f: F, g: G) => H)
                | ((e: E, f: F) => (g: G) => H)
                | ((e: E) => ((f: F, g: G) => H) | ((f: F) => (g: G) => H)))
            | ((
                b: B,
                c: C,
              ) =>
                | ((d: D, e: E, f: F, g: G) => H)
                | ((d: D, e: E, f: F) => (g: G) => H)
                | ((
                    d: D,
                    e: E,
                  ) => ((f: F, g: G) => H) | ((f: F) => (g: G) => H))
                | ((
                    d: D,
                  ) =>
                    | ((e: E, f: F, g: G) => H)
                    | ((e: E, f: F) => (g: G) => H)
                    | ((
                        e: E,
                      ) => ((f: F, g: G) => H) | ((f: F) => (g: G) => H))))
            | ((
                b: B,
              ) =>
                | ((c: C, d: D, e: E, f: F, g: G) => H)
                | ((c: C, d: D, e: E, f: F) => (g: G) => H)
                | ((
                    c: C,
                    d: D,
                    e: E,
                  ) => ((f: F, g: G) => H) | ((f: F) => (g: G) => H))
                | ((
                    c: C,
                    d: D,
                  ) =>
                    | ((e: E, f: F, g: G) => H)
                    | ((e: E, f: F) => (g: G) => H)
                    | ((e: E) => ((f: F, g: G) => H) | ((f: F) => (g: G) => H)))
                | ((
                    c: C,
                  ) =>
                    | ((d: D, e: E, f: F, g: G) => H)
                    | ((d: D, e: E, f: F) => (g: G) => H)
                    | ((
                        d: D,
                        e: E,
                      ) => ((f: F, g: G) => H) | ((f: F) => (g: G) => H))
                    | ((
                        d: D,
                      ) =>
                        | ((e: E, f: F, g: G) => H)
                        | ((e: E, f: F) => (g: G) => H)
                        | ((
                            e: E,
                          ) =>
                            | ((f: F, g: G) => H)
                            | ((f: F) => (g: G) => H))))))
      >
    >
  })
})
