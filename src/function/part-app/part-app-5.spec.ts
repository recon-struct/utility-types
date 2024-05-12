import { describe, expectTypeOf, it } from 'vitest'
import type { PartApp5 } from '~/function/part-app/part-app-5'

describe('PartApp5', () => {
  it('should be a function with 5 parameters', () => {
    type Ex = PartApp5

    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any, b: any, c: any, d: any, e: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any) => (b: any, c: any, d: any, e: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any) => (b: any) => (c: any, d: any, e: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any) => (b: any) => (c: any) => (d: any, e: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any) => (b: any) => (c: any) => (d: any) => (e: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any) => (b: any) => (c: any, d: any) => (e: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any) => (b: any, c: any) => (d: any, e: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any) => (b: any, c: any) => (d: any) => (e: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any) => (b: any, c: any, d: any) => (e: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any, b: any) => (c: any, d: any, e: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any, b: any) => (c: any) => (d: any, e: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any, b: any) => (c: any) => (d: any) => (e: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any, b: any) => (c: any, d: any) => (e: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any, b: any, c: any) => (d: any, e: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any, b: any, c: any) => (d: any) => (e: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any, b: any, c: any, d: any) => (e: any) => any
    >()
  })

  it('should return a value of type F', () => {
    type A = 'A'
    type B = 'B'
    type C = 'C'
    type D = 'D'
    type E = 'E'
    type F = 'F'
    type Ex = PartApp5<A, B, C, D, E, F>

    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any, b: any, c: any, d: any, e: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any) => (b: any, c: any, d: any, e: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any) => (b: any) => (c: any, d: any, e: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any) => (b: any) => (c: any) => (d: any, e: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any) => (b: any) => (c: any) => (d: any) => (e: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any) => (b: any) => (c: any, d: any) => (e: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any) => (b: any, c: any) => (d: any, e: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any) => (b: any, c: any) => (d: any) => (e: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any) => (b: any, c: any, d: any) => (e: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any, b: any) => (c: any, d: any, e: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any, b: any) => (c: any) => (d: any, e: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any, b: any) => (c: any) => (d: any) => (e: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any, b: any) => (c: any, d: any) => (e: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any, b: any, c: any) => (d: any, e: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any, b: any, c: any) => (d: any) => (e: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any, b: any, c: any, d: any) => (e: any) => any
    >()
  })
})
