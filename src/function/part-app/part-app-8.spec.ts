import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { PartApp8 } from '~/function/part-app/part-app-8'
import type { Expect } from '~/helper/expect'

describe('PartApp6', () => {
  it('should be a function with 8 parameters', () => {
    type Ex = PartApp8<any, any, any, any, any, any, any, any, 1>

    type TestEx = Expect<
      IsEqual<
        Ex,
        | ((
            a: any,
            b: any,
            c: any,
            d: any,
            e: any,
            f: any,
            g: any,
            h: any,
          ) => 1)
        | ((
            a: any,
            b: any,
            c: any,
            d: any,
            e: any,
            f: any,
            g: any,
          ) => (h: any) => 1)
        | ((
            a: any,
            b: any,
            c: any,
            d: any,
            e: any,
            f: any,
          ) => ((g: any, h: any) => 1) | ((g: any) => (h: any) => 1))
        | ((
            a: any,
            b: any,
            c: any,
            d: any,
            e: any,
          ) =>
            | ((f: any, g: any, h: any) => 1)
            | ((f: any, g: any) => (h: any) => 1)
            | ((
                f: any,
              ) => ((g: any, h: any) => 1) | ((g: any) => (h: any) => 1)))
        | ((
            a: any,
            b: any,
            c: any,
            d: any,
          ) =>
            | ((e: any, f: any, g: any, h: any) => 1)
            | ((e: any, f: any, g: any) => (h: any) => 1)
            | ((
                e: any,
                f: any,
              ) => ((g: any, h: any) => 1) | ((g: any) => (h: any) => 1))
            | ((
                e: any,
              ) =>
                | ((f: any, g: any, h: any) => 1)
                | ((f: any, g: any) => (h: any) => 1)
                | ((
                    f: any,
                  ) => ((g: any, h: any) => 1) | ((g: any) => (h: any) => 1))))
        | ((
            a: any,
            b: any,
            c: any,
          ) =>
            | ((d: any, e: any, f: any, g: any, h: any) => 1)
            | ((d: any, e: any, f: any, g: any) => (h: any) => 1)
            | ((
                d: any,
                e: any,
                f: any,
              ) => ((g: any, h: any) => 1) | ((g: any) => (h: any) => 1))
            | ((
                d: any,
                e: any,
              ) =>
                | ((f: any, g: any, h: any) => 1)
                | ((f: any, g: any) => (h: any) => 1)
                | ((
                    f: any,
                  ) => ((g: any, h: any) => 1) | ((g: any) => (h: any) => 1)))
            | ((
                d: any,
              ) =>
                | ((e: any, f: any, g: any, h: any) => 1)
                | ((e: any, f: any, g: any) => (h: any) => 1)
                | ((
                    e: any,
                    f: any,
                  ) => ((g: any, h: any) => 1) | ((g: any) => (h: any) => 1))
                | ((
                    e: any,
                  ) =>
                    | ((f: any, g: any, h: any) => 1)
                    | ((f: any, g: any) => (h: any) => 1)
                    | ((
                        f: any,
                      ) =>
                        | ((g: any, h: any) => 1)
                        | ((g: any) => (h: any) => 1)))))
        | ((
            a: any,
            b: any,
          ) =>
            | ((c: any, d: any, e: any, f: any, g: any, h: any) => 1)
            | ((c: any, d: any, e: any, f: any, g: any) => (h: any) => 1)
            | ((
                c: any,
                d: any,
                e: any,
                f: any,
              ) => ((g: any, h: any) => 1) | ((g: any) => (h: any) => 1))
            | ((
                c: any,
                d: any,
                e: any,
              ) =>
                | ((f: any, g: any, h: any) => 1)
                | ((f: any, g: any) => (h: any) => 1)
                | ((
                    f: any,
                  ) => ((g: any, h: any) => 1) | ((g: any) => (h: any) => 1)))
            | ((
                c: any,
                d: any,
              ) =>
                | ((e: any, f: any, g: any, h: any) => 1)
                | ((e: any, f: any, g: any) => (h: any) => 1)
                | ((
                    e: any,
                    f: any,
                  ) => ((g: any, h: any) => 1) | ((g: any) => (h: any) => 1))
                | ((
                    e: any,
                  ) =>
                    | ((f: any, g: any, h: any) => 1)
                    | ((f: any, g: any) => (h: any) => 1)
                    | ((
                        f: any,
                      ) =>
                        | ((g: any, h: any) => 1)
                        | ((g: any) => (h: any) => 1))))
            | ((
                c: any,
              ) =>
                | ((d: any, e: any, f: any, g: any, h: any) => 1)
                | ((d: any, e: any, f: any, g: any) => (h: any) => 1)
                | ((
                    d: any,
                    e: any,
                    f: any,
                  ) => ((g: any, h: any) => 1) | ((g: any) => (h: any) => 1))
                | ((
                    d: any,
                    e: any,
                  ) =>
                    | ((f: any, g: any, h: any) => 1)
                    | ((f: any, g: any) => (h: any) => 1)
                    | ((
                        f: any,
                      ) =>
                        | ((g: any, h: any) => 1)
                        | ((g: any) => (h: any) => 1)))
                | ((
                    d: any,
                  ) =>
                    | ((e: any, f: any, g: any, h: any) => 1)
                    | ((e: any, f: any, g: any) => (h: any) => 1)
                    | ((
                        e: any,
                        f: any,
                      ) =>
                        | ((g: any, h: any) => 1)
                        | ((g: any) => (h: any) => 1))
                    | ((
                        e: any,
                      ) =>
                        | ((f: any, g: any, h: any) => 1)
                        | ((f: any, g: any) => (h: any) => 1)
                        | ((
                            f: any,
                          ) =>
                            | ((g: any, h: any) => 1)
                            | ((g: any) => (h: any) => 1))))))
        | ((
            a: any,
          ) =>
            | ((b: any, c: any, d: any, e: any, f: any, g: any, h: any) => 1)
            | ((
                b: any,
                c: any,
                d: any,
                e: any,
                f: any,
                g: any,
              ) => (h: any) => 1)
            | ((
                b: any,
                c: any,
                d: any,
                e: any,
                f: any,
              ) => ((g: any, h: any) => 1) | ((g: any) => (h: any) => 1))
            | ((
                b: any,
                c: any,
                d: any,
                e: any,
              ) =>
                | ((f: any, g: any, h: any) => 1)
                | ((f: any, g: any) => (h: any) => 1)
                | ((
                    f: any,
                  ) => ((g: any, h: any) => 1) | ((g: any) => (h: any) => 1)))
            | ((
                b: any,
                c: any,
                d: any,
              ) =>
                | ((e: any, f: any, g: any, h: any) => 1)
                | ((e: any, f: any, g: any) => (h: any) => 1)
                | ((
                    e: any,
                    f: any,
                  ) => ((g: any, h: any) => 1) | ((g: any) => (h: any) => 1))
                | ((
                    e: any,
                  ) =>
                    | ((f: any, g: any, h: any) => 1)
                    | ((f: any, g: any) => (h: any) => 1)
                    | ((
                        f: any,
                      ) =>
                        | ((g: any, h: any) => 1)
                        | ((g: any) => (h: any) => 1))))
            | ((
                b: any,
                c: any,
              ) =>
                | ((d: any, e: any, f: any, g: any, h: any) => 1)
                | ((d: any, e: any, f: any, g: any) => (h: any) => 1)
                | ((
                    d: any,
                    e: any,
                    f: any,
                  ) => ((g: any, h: any) => 1) | ((g: any) => (h: any) => 1))
                | ((
                    d: any,
                    e: any,
                  ) =>
                    | ((f: any, g: any, h: any) => 1)
                    | ((f: any, g: any) => (h: any) => 1)
                    | ((
                        f: any,
                      ) =>
                        | ((g: any, h: any) => 1)
                        | ((g: any) => (h: any) => 1)))
                | ((
                    d: any,
                  ) =>
                    | ((e: any, f: any, g: any, h: any) => 1)
                    | ((e: any, f: any, g: any) => (h: any) => 1)
                    | ((
                        e: any,
                        f: any,
                      ) =>
                        | ((g: any, h: any) => 1)
                        | ((g: any) => (h: any) => 1))
                    | ((
                        e: any,
                      ) =>
                        | ((f: any, g: any, h: any) => 1)
                        | ((f: any, g: any) => (h: any) => 1)
                        | ((
                            f: any,
                          ) =>
                            | ((g: any, h: any) => 1)
                            | ((g: any) => (h: any) => 1)))))
            | ((
                b: any,
              ) =>
                | ((c: any, d: any, e: any, f: any, g: any, h: any) => 1)
                | ((c: any, d: any, e: any, f: any, g: any) => (h: any) => 1)
                | ((
                    c: any,
                    d: any,
                    e: any,
                    f: any,
                  ) => ((g: any, h: any) => 1) | ((g: any) => (h: any) => 1))
                | ((
                    c: any,
                    d: any,
                    e: any,
                  ) =>
                    | ((f: any, g: any, h: any) => 1)
                    | ((f: any, g: any) => (h: any) => 1)
                    | ((
                        f: any,
                      ) =>
                        | ((g: any, h: any) => 1)
                        | ((g: any) => (h: any) => 1)))
                | ((
                    c: any,
                    d: any,
                  ) =>
                    | ((e: any, f: any, g: any, h: any) => 1)
                    | ((e: any, f: any, g: any) => (h: any) => 1)
                    | ((
                        e: any,
                        f: any,
                      ) =>
                        | ((g: any, h: any) => 1)
                        | ((g: any) => (h: any) => 1))
                    | ((
                        e: any,
                      ) =>
                        | ((f: any, g: any, h: any) => 1)
                        | ((f: any, g: any) => (h: any) => 1)
                        | ((
                            f: any,
                          ) =>
                            | ((g: any, h: any) => 1)
                            | ((g: any) => (h: any) => 1))))
                | ((
                    c: any,
                  ) =>
                    | ((d: any, e: any, f: any, g: any, h: any) => 1)
                    | ((d: any, e: any, f: any, g: any) => (h: any) => 1)
                    | ((
                        d: any,
                        e: any,
                        f: any,
                      ) =>
                        | ((g: any, h: any) => 1)
                        | ((g: any) => (h: any) => 1))
                    | ((
                        d: any,
                        e: any,
                      ) =>
                        | ((f: any, g: any, h: any) => 1)
                        | ((f: any, g: any) => (h: any) => 1)
                        | ((
                            f: any,
                          ) =>
                            | ((g: any, h: any) => 1)
                            | ((g: any) => (h: any) => 1)))
                    | ((
                        d: any,
                      ) =>
                        | ((e: any, f: any, g: any, h: any) => 1)
                        | ((e: any, f: any, g: any) => (h: any) => 1)
                        | ((
                            e: any,
                            f: any,
                          ) =>
                            | ((g: any, h: any) => 1)
                            | ((g: any) => (h: any) => 1))
                        | ((
                            e: any,
                          ) =>
                            | ((f: any, g: any, h: any) => 1)
                            | ((f: any, g: any) => (h: any) => 1)
                            | ((
                                f: any,
                              ) =>
                                | ((g: any, h: any) => 1)
                                | ((g: any) => (h: any) => 1)))))))
      >
    >
  })

  it('should return a value of type I', () => {
    type A = 'A'
    type B = 'B'
    type C = 'C'
    type D = 'D'
    type E = 'E'
    type F = 'F'
    type G = 'G'
    type H = 'H'
    type I = 'I'
    type Ex = PartApp8<A, B, C, D, E, F, G, H, I>

    type TestEx = Expect<
      IsEqual<
        Ex,
        | ((a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H) => I)
        | ((a: A, b: B, c: C, d: D, e: E, f: F, g: G) => (h: H) => I)
        | ((
            a: A,
            b: B,
            c: C,
            d: D,
            e: E,
            f: F,
          ) => ((g: G, h: H) => I) | ((g: G) => (h: H) => I))
        | ((
            a: A,
            b: B,
            c: C,
            d: D,
            e: E,
          ) =>
            | ((f: F, g: G, h: H) => I)
            | ((f: F, g: G) => (h: H) => I)
            | ((f: F) => ((g: G, h: H) => I) | ((g: G) => (h: H) => I)))
        | ((
            a: A,
            b: B,
            c: C,
            d: D,
          ) =>
            | ((e: E, f: F, g: G, h: H) => I)
            | ((e: E, f: F, g: G) => (h: H) => I)
            | ((e: E, f: F) => ((g: G, h: H) => I) | ((g: G) => (h: H) => I))
            | ((
                e: E,
              ) =>
                | ((f: F, g: G, h: H) => I)
                | ((f: F, g: G) => (h: H) => I)
                | ((f: F) => ((g: G, h: H) => I) | ((g: G) => (h: H) => I))))
        | ((
            a: A,
            b: B,
            c: C,
          ) =>
            | ((d: D, e: E, f: F, g: G, h: H) => I)
            | ((d: D, e: E, f: F, g: G) => (h: H) => I)
            | ((
                d: D,
                e: E,
                f: F,
              ) => ((g: G, h: H) => I) | ((g: G) => (h: H) => I))
            | ((
                d: D,
                e: E,
              ) =>
                | ((f: F, g: G, h: H) => I)
                | ((f: F, g: G) => (h: H) => I)
                | ((f: F) => ((g: G, h: H) => I) | ((g: G) => (h: H) => I)))
            | ((
                d: D,
              ) =>
                | ((e: E, f: F, g: G, h: H) => I)
                | ((e: E, f: F, g: G) => (h: H) => I)
                | ((
                    e: E,
                    f: F,
                  ) => ((g: G, h: H) => I) | ((g: G) => (h: H) => I))
                | ((
                    e: E,
                  ) =>
                    | ((f: F, g: G, h: H) => I)
                    | ((f: F, g: G) => (h: H) => I)
                    | ((
                        f: F,
                      ) => ((g: G, h: H) => I) | ((g: G) => (h: H) => I)))))
        | ((
            a: A,
            b: B,
          ) =>
            | ((c: C, d: D, e: E, f: F, g: G, h: H) => I)
            | ((c: C, d: D, e: E, f: F, g: G) => (h: H) => I)
            | ((
                c: C,
                d: D,
                e: E,
                f: F,
              ) => ((g: G, h: H) => I) | ((g: G) => (h: H) => I))
            | ((
                c: C,
                d: D,
                e: E,
              ) =>
                | ((f: F, g: G, h: H) => I)
                | ((f: F, g: G) => (h: H) => I)
                | ((f: F) => ((g: G, h: H) => I) | ((g: G) => (h: H) => I)))
            | ((
                c: C,
                d: D,
              ) =>
                | ((e: E, f: F, g: G, h: H) => I)
                | ((e: E, f: F, g: G) => (h: H) => I)
                | ((
                    e: E,
                    f: F,
                  ) => ((g: G, h: H) => I) | ((g: G) => (h: H) => I))
                | ((
                    e: E,
                  ) =>
                    | ((f: F, g: G, h: H) => I)
                    | ((f: F, g: G) => (h: H) => I)
                    | ((
                        f: F,
                      ) => ((g: G, h: H) => I) | ((g: G) => (h: H) => I))))
            | ((
                c: C,
              ) =>
                | ((d: D, e: E, f: F, g: G, h: H) => I)
                | ((d: D, e: E, f: F, g: G) => (h: H) => I)
                | ((
                    d: D,
                    e: E,
                    f: F,
                  ) => ((g: G, h: H) => I) | ((g: G) => (h: H) => I))
                | ((
                    d: D,
                    e: E,
                  ) =>
                    | ((f: F, g: G, h: H) => I)
                    | ((f: F, g: G) => (h: H) => I)
                    | ((f: F) => ((g: G, h: H) => I) | ((g: G) => (h: H) => I)))
                | ((
                    d: D,
                  ) =>
                    | ((e: E, f: F, g: G, h: H) => I)
                    | ((e: E, f: F, g: G) => (h: H) => I)
                    | ((
                        e: E,
                        f: F,
                      ) => ((g: G, h: H) => I) | ((g: G) => (h: H) => I))
                    | ((
                        e: E,
                      ) =>
                        | ((f: F, g: G, h: H) => I)
                        | ((f: F, g: G) => (h: H) => I)
                        | ((
                            f: F,
                          ) =>
                            | ((g: G, h: H) => I)
                            | ((g: G) => (h: H) => I))))))
        | ((
            a: A,
          ) =>
            | ((b: B, c: C, d: D, e: E, f: F, g: G, h: H) => I)
            | ((b: B, c: C, d: D, e: E, f: F, g: G) => (h: H) => I)
            | ((
                b: B,
                c: C,
                d: D,
                e: E,
                f: F,
              ) => ((g: G, h: H) => I) | ((g: G) => (h: H) => I))
            | ((
                b: B,
                c: C,
                d: D,
                e: E,
              ) =>
                | ((f: F, g: G, h: H) => I)
                | ((f: F, g: G) => (h: H) => I)
                | ((f: F) => ((g: G, h: H) => I) | ((g: G) => (h: H) => I)))
            | ((
                b: B,
                c: C,
                d: D,
              ) =>
                | ((e: E, f: F, g: G, h: H) => I)
                | ((e: E, f: F, g: G) => (h: H) => I)
                | ((
                    e: E,
                    f: F,
                  ) => ((g: G, h: H) => I) | ((g: G) => (h: H) => I))
                | ((
                    e: E,
                  ) =>
                    | ((f: F, g: G, h: H) => I)
                    | ((f: F, g: G) => (h: H) => I)
                    | ((
                        f: F,
                      ) => ((g: G, h: H) => I) | ((g: G) => (h: H) => I))))
            | ((
                b: B,
                c: C,
              ) =>
                | ((d: D, e: E, f: F, g: G, h: H) => I)
                | ((d: D, e: E, f: F, g: G) => (h: H) => I)
                | ((
                    d: D,
                    e: E,
                    f: F,
                  ) => ((g: G, h: H) => I) | ((g: G) => (h: H) => I))
                | ((
                    d: D,
                    e: E,
                  ) =>
                    | ((f: F, g: G, h: H) => I)
                    | ((f: F, g: G) => (h: H) => I)
                    | ((f: F) => ((g: G, h: H) => I) | ((g: G) => (h: H) => I)))
                | ((
                    d: D,
                  ) =>
                    | ((e: E, f: F, g: G, h: H) => I)
                    | ((e: E, f: F, g: G) => (h: H) => I)
                    | ((
                        e: E,
                        f: F,
                      ) => ((g: G, h: H) => I) | ((g: G) => (h: H) => I))
                    | ((
                        e: E,
                      ) =>
                        | ((f: F, g: G, h: H) => I)
                        | ((f: F, g: G) => (h: H) => I)
                        | ((
                            f: F,
                          ) => ((g: G, h: H) => I) | ((g: G) => (h: H) => I)))))
            | ((
                b: B,
              ) =>
                | ((c: C, d: D, e: E, f: F, g: G, h: H) => I)
                | ((c: C, d: D, e: E, f: F, g: G) => (h: H) => I)
                | ((
                    c: C,
                    d: D,
                    e: E,
                    f: F,
                  ) => ((g: G, h: H) => I) | ((g: G) => (h: H) => I))
                | ((
                    c: C,
                    d: D,
                    e: E,
                  ) =>
                    | ((f: F, g: G, h: H) => I)
                    | ((f: F, g: G) => (h: H) => I)
                    | ((f: F) => ((g: G, h: H) => I) | ((g: G) => (h: H) => I)))
                | ((
                    c: C,
                    d: D,
                  ) =>
                    | ((e: E, f: F, g: G, h: H) => I)
                    | ((e: E, f: F, g: G) => (h: H) => I)
                    | ((
                        e: E,
                        f: F,
                      ) => ((g: G, h: H) => I) | ((g: G) => (h: H) => I))
                    | ((
                        e: E,
                      ) =>
                        | ((f: F, g: G, h: H) => I)
                        | ((f: F, g: G) => (h: H) => I)
                        | ((
                            f: F,
                          ) => ((g: G, h: H) => I) | ((g: G) => (h: H) => I))))
                | ((
                    c: C,
                  ) =>
                    | ((d: D, e: E, f: F, g: G, h: H) => I)
                    | ((d: D, e: E, f: F, g: G) => (h: H) => I)
                    | ((
                        d: D,
                        e: E,
                        f: F,
                      ) => ((g: G, h: H) => I) | ((g: G) => (h: H) => I))
                    | ((
                        d: D,
                        e: E,
                      ) =>
                        | ((f: F, g: G, h: H) => I)
                        | ((f: F, g: G) => (h: H) => I)
                        | ((
                            f: F,
                          ) => ((g: G, h: H) => I) | ((g: G) => (h: H) => I)))
                    | ((
                        d: D,
                      ) =>
                        | ((e: E, f: F, g: G, h: H) => I)
                        | ((e: E, f: F, g: G) => (h: H) => I)
                        | ((
                            e: E,
                            f: F,
                          ) => ((g: G, h: H) => I) | ((g: G) => (h: H) => I))
                        | ((
                            e: E,
                          ) =>
                            | ((f: F, g: G, h: H) => I)
                            | ((f: F, g: G) => (h: H) => I)
                            | ((
                                f: F,
                              ) =>
                                | ((g: G, h: H) => I)
                                | ((g: G) => (h: H) => I)))))))
      >
    >
  })
})
