import { describe, expectTypeOf, it } from 'vitest'
import type { PartApp4 } from '~/function/part-app/part-app-4'

describe('PartApp4', () => {
  it('should be a function with 4 parameters', () => {
    type Ex = PartApp4

    expectTypeOf<Ex>().toMatchTypeOf<(a: any, b: any, c: any, d: any) => any>()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any) => (b: any, c: any, d: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any) => (b: any) => (c: any, d: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any) => (b: any) => (c: any) => (d: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any) => (b: any, c: any) => (d: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any, b: any) => (c: any, d: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any, b: any) => (c: any) => (d: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any, b: any, c: any) => (d: any) => any
    >()
  })

  it('should return a value of type D', () => {
    type A = 'A'
    type B = 'B'
    type C = 'C'
    type D = 'D'
    type E = 'E'
    type Ex = PartApp4<A, B, C, D, E>

    expectTypeOf<Ex>().toMatchTypeOf<(a: A, b: B, c: C, d: D) => E>()
    expectTypeOf<Ex>().toMatchTypeOf<(a: A) => (b: B, c: C, d: D) => E>()
    expectTypeOf<Ex>().toMatchTypeOf<(a: A) => (b: B) => (c: C, d: D) => E>()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B) => (c: C) => (d: D) => E
    >()
    expectTypeOf<Ex>().toMatchTypeOf<(a: A) => (b: B, c: C) => (d: D) => E>()
    expectTypeOf<Ex>().toMatchTypeOf<(a: A, b: B) => (c: C, d: D) => E>()
    expectTypeOf<Ex>().toMatchTypeOf<(a: A, b: B) => (c: C) => (d: D) => E>()
    expectTypeOf<Ex>().toMatchTypeOf<(a: A, b: B, c: C) => (d: D) => E>()
  })
})
