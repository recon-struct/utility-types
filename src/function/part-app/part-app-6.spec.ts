import { describe, expectTypeOf, it } from 'vitest'
import type { PartApp6 } from '~/function/part-app/part-app-6'

describe('PartApp6', () => {
  it('should be a function with 6 parameters', () => {
    type Ex = PartApp6

    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any, b: any, c: any, d: any, e: any, f: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any) => (b: any, c: any, d: any, e: any, f: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any) => (b: any) => (c: any, d: any, e: any, f: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any) => (b: any) => (c: any) => (d: any, e: any, f: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any) => (b: any) => (c: any) => (d: any) => (e: any, f: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (b: any) => (c: any) => (d: any) => (e: any) => (f: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any) => (b: any) => (c: any) => (d: any, e: any) => (f: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any) => (b: any) => (c: any, d: any) => (e: any, f: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any) => (b: any) => (c: any, d: any) => (e: any) => (f: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any) => (b: any) => (c: any, d: any, e: any) => (f: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any) => (b: any, c: any) => (d: any, e: any, f: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any) => (b: any, c: any) => (d: any) => (e: any, f: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any) => (b: any, c: any) => (d: any) => (e: any) => (f: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any) => (b: any, c: any) => (d: any, e: any) => (f: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any) => (b: any, c: any, d: any) => (e: any, f: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any) => (b: any, c: any, d: any) => (e: any) => (f: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any) => (b: any, c: any, d: any, e: any) => (f: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any, b: any) => (c: any, d: any, e: any, f: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any, b: any) => (c: any) => (d: any, e: any, f: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any, b: any) => (c: any) => (d: any) => (e: any, f: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any, b: any) => (c: any) => (d: any) => (e: any) => (f: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any, b: any) => (c: any) => (d: any, e: any) => (f: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any, b: any) => (c: any, d: any) => (e: any, f: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any, b: any) => (c: any, d: any) => (e: any) => (f: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any, b: any) => (c: any, d: any, e: any) => (f: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any, b: any, c: any) => (d: any, e: any, f: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any, b: any, c: any) => (d: any) => (e: any, f: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any, b: any, c: any) => (d: any) => (e: any) => (f: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any, b: any, c: any) => (d: any, e: any) => (f: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any, b: any, c: any, d: any) => (e: any, f: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any, b: any, c: any, d: any) => (e: any) => (f: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any, b: any, c: any, d: any, e: any) => (f: any) => any
    >()
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

    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B, c: C, d: D, e: E, f: F) => G
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B, c: C, d: D, e: E, f: F) => G
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B) => (c: C, d: D, e: E, f: F) => G
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B) => (c: C) => (d: D, e: E, f: F) => G
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B) => (c: C) => (d: D) => (e: E, f: F) => G
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B) => (c: C) => (d: D) => (e: E) => (f: F) => G
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B) => (c: C) => (d: D, e: E) => (f: F) => G
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B) => (c: C, d: D) => (e: E, f: F) => G
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B) => (c: C, d: D) => (e: E) => (f: F) => G
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B) => (c: C, d: D, e: E) => (f: F) => G
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B, c: C) => (d: D, e: E, f: F) => G
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B, c: C) => (d: D) => (e: E, f: F) => G
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B, c: C) => (d: D) => (e: E) => (f: F) => G
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B, c: C) => (d: D, e: E) => (f: F) => G
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B, c: C, d: D) => (e: E, f: F) => G
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B, c: C, d: D) => (e: E) => (f: F) => G
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B, c: C, d: D, e: E) => (f: F) => G
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B) => (c: C, d: D, e: E, f: F) => G
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B) => (c: C) => (d: D, e: E, f: F) => G
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B) => (c: C) => (d: D) => (e: E, f: F) => G
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B) => (c: C) => (d: D) => (e: E) => (f: F) => G
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B) => (c: C) => (d: D, e: E) => (f: F) => G
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B) => (c: C, d: D) => (e: E, f: F) => G
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B) => (c: C, d: D) => (e: E) => (f: F) => G
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B) => (c: C, d: D, e: E) => (f: F) => G
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B, c: C) => (d: D, e: E, f: F) => G
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B, c: C) => (d: D) => (e: E, f: F) => G
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B, c: C) => (d: D) => (e: E) => (f: F) => G
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B, c: C) => (d: D, e: E) => (f: F) => G
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B, c: C, d: D) => (e: E, f: F) => G
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B, c: C, d: D) => (e: E) => (f: F) => G
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B, c: C, d: D, e: E) => (f: F) => G
    >()
  })
})
