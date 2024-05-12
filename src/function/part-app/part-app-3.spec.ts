import { describe, expectTypeOf, it } from 'vitest'
import type { PartApp3 } from '~/function/part-app/part-app-3'

describe('PartApp3', () => {
  it('should have 3 parameters', () => {
    type Ex = PartApp3

    expectTypeOf<Ex>().toMatchTypeOf<(a: any, b: any, c: any) => any>()
    expectTypeOf<Ex>().toMatchTypeOf<(a: any) => (b: any, c: any) => any>()
    expectTypeOf<Ex>().toMatchTypeOf<(a: any) => (b: any) => (c: any) => any>()
    expectTypeOf<Ex>().toMatchTypeOf<(a: any, b: any) => (c: any) => any>()
  })

  it('should return a value of type D', () => {
    type A = 'A'
    type B = 'B'
    type C = 'C'
    type D = 'D'
    type Ex = PartApp3<A, B, C, D>

    expectTypeOf<Ex>().toMatchTypeOf<(a: A, b: B, c: C) => D>()
    expectTypeOf<Ex>().toMatchTypeOf<(a: A) => (b: B, c: C) => D>()
    expectTypeOf<Ex>().toMatchTypeOf<(a: A) => (b: B) => (c: C) => D>()
    expectTypeOf<Ex>().toMatchTypeOf<(a: A, b: B) => (c: C) => D>()
  })
})
