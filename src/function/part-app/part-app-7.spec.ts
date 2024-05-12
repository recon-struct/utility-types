import { describe, expectTypeOf, it } from 'vitest'
import type { PartApp7 } from '~/function/part-app/part-app-7'

describe('PartApp6', () => {
  it('should be a function with 7 parameters', () => {
    type Ex = PartApp7

    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any, b: any, c: any, d: any, e: any, f: any, g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any) => (b: any, c: any, d: any, e: any, f: any, g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any) => (b: any) => (c: any, d: any, e: any, f: any, g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (b: any) => (c: any) => (d: any, e: any, f: any, g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (b: any) => (c: any) => (d: any) => (e: any, f: any, g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
      ) => (c: any) => (d: any) => (e: any) => (f: any, g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
      ) => (c: any) => (d: any) => (e: any) => (f: any) => (g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
      ) => (c: any) => (d: any) => (e: any, f: any) => (g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (b: any) => (c: any) => (d: any, e: any) => (f: any, g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
      ) => (c: any) => (d: any, e: any) => (f: any) => (g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (b: any) => (c: any) => (d: any, e: any, f: any) => (g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (b: any) => (c: any, d: any) => (e: any, f: any, g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (b: any) => (c: any, d: any) => (e: any) => (f: any, g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
      ) => (c: any, d: any) => (e: any) => (f: any) => (g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (b: any) => (c: any, d: any) => (e: any, f: any) => (g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (b: any) => (c: any, d: any, e: any) => (f: any, g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (b: any) => (c: any, d: any, e: any) => (f: any) => (g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (b: any) => (c: any, d: any, e: any, f: any) => (g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any) => (b: any, c: any) => (d: any, e: any, f: any, g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (b: any, c: any) => (d: any) => (e: any, f: any, g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (b: any, c: any) => (d: any) => (e: any) => (f: any, g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
        c: any,
      ) => (d: any) => (e: any) => (f: any) => (g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (b: any, c: any) => (d: any) => (e: any, f: any) => (g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (b: any, c: any) => (d: any, e: any) => (f: any, g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (b: any, c: any) => (d: any, e: any) => (f: any) => (g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (b: any, c: any) => (d: any, e: any, f: any) => (g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any) => (b: any, c: any, d: any) => (e: any, f: any, g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (b: any, c: any, d: any) => (e: any) => (f: any, g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (b: any, c: any, d: any) => (e: any) => (f: any) => (g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (b: any, c: any, d: any) => (e: any, f: any) => (g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any) => (b: any, c: any, d: any, e: any) => (f: any, g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (b: any, c: any, d: any, e: any) => (f: any) => (g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any) => (b: any, c: any, d: any, e: any, f: any) => (g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any, b: any) => (c: any, d: any, e: any, f: any, g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any, b: any) => (c: any) => (d: any, e: any, f: any, g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
      ) => (c: any) => (d: any) => (e: any, f: any, g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
      ) => (c: any) => (d: any) => (e: any) => (f: any, g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
      ) => (c: any) => (d: any) => (e: any) => (f: any) => (g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
      ) => (c: any) => (d: any) => (e: any, f: any) => (g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
      ) => (c: any) => (d: any, e: any) => (f: any, g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
      ) => (c: any) => (d: any, e: any) => (f: any) => (g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
      ) => (c: any) => (d: any, e: any, f: any) => (g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any, b: any) => (c: any, d: any) => (e: any, f: any, g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
      ) => (c: any, d: any) => (e: any) => (f: any, g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
      ) => (c: any, d: any) => (e: any) => (f: any) => (g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
      ) => (c: any, d: any) => (e: any, f: any) => (g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any, b: any) => (c: any, d: any, e: any) => (f: any, g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
      ) => (c: any, d: any, e: any) => (f: any) => (g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any, b: any) => (c: any, d: any, e: any, f: any) => (g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any, b: any, c: any) => (d: any, e: any, f: any, g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any, b: any, c: any) => (d: any) => (e: any, f: any, g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
        c: any,
      ) => (d: any) => (e: any) => (f: any, g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
        c: any,
      ) => (d: any) => (e: any) => (f: any) => (g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
        c: any,
      ) => (d: any) => (e: any, f: any) => (g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any, b: any, c: any) => (d: any, e: any) => (f: any, g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
        c: any,
      ) => (d: any, e: any) => (f: any) => (g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any, b: any, c: any) => (d: any, e: any, f: any) => (g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any, b: any, c: any, d: any) => (e: any, f: any, g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any, b: any, c: any, d: any) => (e: any) => (f: any, g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
        c: any,
        d: any,
      ) => (e: any) => (f: any) => (g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any, b: any, c: any, d: any) => (e: any, f: any) => (g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any, b: any, c: any, d: any, e: any) => (f: any, g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any, b: any, c: any, d: any, e: any) => (f: any) => (g: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any, b: any, c: any, d: any, e: any, f: any) => (g: any) => any
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
    type H = 'H'
    type Ex = PartApp7<A, B, C, D, E, F, G, H>

    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B, c: C, d: D, e: E, f: F, g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B) => (c: C, d: D, e: E, f: F, g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B) => (c: C) => (d: D, e: E, f: F, g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B) => (c: C) => (d: D) => (e: E, f: F, g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B) => (c: C) => (d: D) => (e: E) => (f: F, g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B) => (c: C) => (d: D) => (e: E) => (f: F) => (g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B) => (c: C) => (d: D) => (e: E, f: F) => (g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B) => (c: C) => (d: D, e: E) => (f: F, g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B) => (c: C) => (d: D, e: E) => (f: F) => (g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B) => (c: C) => (d: D, e: E, f: F) => (g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B) => (c: C, d: D) => (e: E, f: F, g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B) => (c: C, d: D) => (e: E) => (f: F, g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B) => (c: C, d: D) => (e: E) => (f: F) => (g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B) => (c: C, d: D) => (e: E, f: F) => (g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B) => (c: C, d: D, e: E) => (f: F, g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B) => (c: C, d: D, e: E) => (f: F) => (g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B) => (c: C, d: D, e: E, f: F) => (g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B, c: C) => (d: D, e: E, f: F, g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B, c: C) => (d: D) => (e: E, f: F, g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B, c: C) => (d: D) => (e: E) => (f: F, g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B, c: C) => (d: D) => (e: E) => (f: F) => (g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B, c: C) => (d: D) => (e: E, f: F) => (g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B, c: C) => (d: D, e: E) => (f: F, g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B, c: C) => (d: D, e: E) => (f: F) => (g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B, c: C) => (d: D, e: E, f: F) => (g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B, c: C, d: D) => (e: E, f: F, g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B, c: C, d: D) => (e: E) => (f: F, g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B, c: C, d: D) => (e: E) => (f: F) => (g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B, c: C, d: D) => (e: E, f: F) => (g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B, c: C, d: D, e: E) => (f: F, g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B, c: C, d: D, e: E) => (f: F) => (g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B, c: C, d: D, e: E, f: F) => (g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B) => (c: C, d: D, e: E, f: F, g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B) => (c: C) => (d: D, e: E, f: F, g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B) => (c: C) => (d: D) => (e: E, f: F, g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B) => (c: C) => (d: D) => (e: E) => (f: F, g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B) => (c: C) => (d: D) => (e: E) => (f: F) => (g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B) => (c: C) => (d: D) => (e: E, f: F) => (g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B) => (c: C) => (d: D, e: E) => (f: F, g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B) => (c: C) => (d: D, e: E) => (f: F) => (g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B) => (c: C) => (d: D, e: E, f: F) => (g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B) => (c: C, d: D) => (e: E, f: F, g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B) => (c: C, d: D) => (e: E) => (f: F, g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B) => (c: C, d: D) => (e: E) => (f: F) => (g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B) => (c: C, d: D) => (e: E, f: F) => (g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B) => (c: C, d: D, e: E) => (f: F, g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B) => (c: C, d: D, e: E) => (f: F) => (g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B) => (c: C, d: D, e: E, f: F) => (g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B, c: C) => (d: D, e: E, f: F, g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B, c: C) => (d: D) => (e: E, f: F, g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B, c: C) => (d: D) => (e: E) => (f: F, g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B, c: C) => (d: D) => (e: E) => (f: F) => (g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B, c: C) => (d: D) => (e: E, f: F) => (g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B, c: C) => (d: D, e: E) => (f: F, g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B, c: C) => (d: D, e: E) => (f: F) => (g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B, c: C) => (d: D, e: E, f: F) => (g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B, c: C, d: D) => (e: E, f: F, g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B, c: C, d: D) => (e: E) => (f: F, g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B, c: C, d: D) => (e: E) => (f: F) => (g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B, c: C, d: D) => (e: E, f: F) => (g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B, c: C, d: D, e: E) => (f: F, g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B, c: C, d: D, e: E) => (f: F) => (g: G) => H
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B, c: C, d: D, e: E, f: F) => (g: G) => H
    >()
  })
})
