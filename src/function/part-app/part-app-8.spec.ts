import { describe, expectTypeOf, it } from 'vitest'
import type { PartApp8 } from '~/function/part-app/part-app-8'

describe('PartApp6', () => {
  it('should be a function with 8 parameters', () => {
    type Ex = PartApp8

    expectTypeOf<Ex>().toMatchTypeOf<
      (a: any, b: any, c: any, d: any, e: any, f: any, g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (b: any, c: any, d: any, e: any, f: any, g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (b: any) => (c: any, d: any, e: any, f: any, g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
      ) => (c: any) => (d: any, e: any, f: any, g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
      ) => (c: any) => (d: any) => (e: any, f: any, g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
      ) => (c: any) => (d: any) => (e: any) => (f: any, g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
      ) => (
        c: any,
      ) => (d: any) => (e: any) => (f: any) => (g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
      ) => (
        c: any,
      ) => (d: any) => (e: any) => (f: any) => (g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
      ) => (
        c: any,
      ) => (d: any) => (e: any) => (f: any, g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
      ) => (c: any) => (d: any) => (e: any, f: any) => (g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
      ) => (
        c: any,
      ) => (d: any) => (e: any, f: any) => (g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
      ) => (c: any) => (d: any) => (e: any, f: any, g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
      ) => (c: any) => (d: any, e: any) => (f: any, g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
      ) => (c: any) => (d: any, e: any) => (f: any) => (g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
      ) => (
        c: any,
      ) => (d: any, e: any) => (f: any) => (g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
      ) => (c: any) => (d: any, e: any) => (f: any, g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
      ) => (c: any) => (d: any, e: any, f: any) => (g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
      ) => (c: any) => (d: any, e: any, f: any) => (g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
      ) => (c: any) => (d: any, e: any, f: any, g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
      ) => (c: any, d: any) => (e: any, f: any, g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
      ) => (c: any, d: any) => (e: any) => (f: any, g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
      ) => (c: any, d: any) => (e: any) => (f: any) => (g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
      ) => (
        c: any,
        d: any,
      ) => (e: any) => (f: any) => (g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
      ) => (c: any, d: any) => (e: any) => (f: any, g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
      ) => (c: any, d: any) => (e: any, f: any) => (g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
      ) => (c: any, d: any) => (e: any, f: any) => (g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
      ) => (c: any, d: any) => (e: any, f: any, g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
      ) => (c: any, d: any, e: any) => (f: any, g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
      ) => (c: any, d: any, e: any) => (f: any) => (g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
      ) => (c: any, d: any, e: any) => (f: any) => (g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
      ) => (c: any, d: any, e: any) => (f: any, g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
      ) => (c: any, d: any, e: any, f: any) => (g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
      ) => (c: any, d: any, e: any, f: any) => (g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
      ) => (c: any, d: any, e: any, f: any, g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (b: any, c: any) => (d: any, e: any, f: any, g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
        c: any,
      ) => (d: any) => (e: any, f: any, g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
        c: any,
      ) => (d: any) => (e: any) => (f: any, g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
        c: any,
      ) => (d: any) => (e: any) => (f: any) => (g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
        c: any,
      ) => (d: any) => (e: any) => (f: any) => (g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
        c: any,
      ) => (d: any) => (e: any) => (f: any, g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
        c: any,
      ) => (d: any) => (e: any, f: any) => (g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
        c: any,
      ) => (d: any) => (e: any, f: any) => (g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
        c: any,
      ) => (d: any) => (e: any, f: any, g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
        c: any,
      ) => (d: any, e: any) => (f: any, g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
        c: any,
      ) => (d: any, e: any) => (f: any) => (g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
        c: any,
      ) => (d: any, e: any) => (f: any) => (g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
        c: any,
      ) => (d: any, e: any) => (f: any, g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
        c: any,
      ) => (d: any, e: any, f: any) => (g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
        c: any,
      ) => (d: any, e: any, f: any) => (g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
        c: any,
      ) => (d: any, e: any, f: any, g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (b: any, c: any, d: any) => (e: any, f: any, g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
        c: any,
        d: any,
      ) => (e: any) => (f: any, g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
        c: any,
        d: any,
      ) => (e: any) => (f: any) => (g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
        c: any,
        d: any,
      ) => (e: any) => (f: any) => (g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
        c: any,
        d: any,
      ) => (e: any) => (f: any, g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
        c: any,
        d: any,
      ) => (e: any, f: any) => (g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
        c: any,
        d: any,
      ) => (e: any, f: any) => (g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
        c: any,
        d: any,
      ) => (e: any, f: any, g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (b: any, c: any, d: any, e: any) => (f: any, g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
        c: any,
        d: any,
        e: any,
      ) => (f: any) => (g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
        c: any,
        d: any,
        e: any,
      ) => (f: any) => (g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
        c: any,
        d: any,
        e: any,
      ) => (f: any, g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (b: any, c: any, d: any, e: any, f: any) => (g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (
        b: any,
        c: any,
        d: any,
        e: any,
        f: any,
      ) => (g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
      ) => (b: any, c: any, d: any, e: any, f: any, g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
      ) => (c: any, d: any, e: any, f: any, g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
      ) => (c: any) => (d: any, e: any, f: any, g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
      ) => (c: any) => (d: any) => (e: any, f: any, g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
      ) => (c: any) => (d: any) => (e: any) => (f: any, g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
      ) => (
        c: any,
      ) => (d: any) => (e: any) => (f: any) => (g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
      ) => (
        c: any,
      ) => (d: any) => (e: any) => (f: any) => (g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
      ) => (
        c: any,
      ) => (d: any) => (e: any) => (f: any, g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
      ) => (c: any) => (d: any) => (e: any, f: any) => (g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
      ) => (
        c: any,
      ) => (d: any) => (e: any, f: any) => (g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
      ) => (c: any) => (d: any) => (e: any, f: any, g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
      ) => (c: any) => (d: any, e: any) => (f: any, g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
      ) => (c: any) => (d: any, e: any) => (f: any) => (g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
      ) => (
        c: any,
      ) => (d: any, e: any) => (f: any) => (g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
      ) => (c: any) => (d: any, e: any) => (f: any, g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
      ) => (c: any) => (d: any, e: any, f: any) => (g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
      ) => (c: any) => (d: any, e: any, f: any) => (g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
      ) => (c: any) => (d: any, e: any, f: any, g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
      ) => (c: any, d: any) => (e: any, f: any, g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
      ) => (c: any, d: any) => (e: any) => (f: any, g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
      ) => (c: any, d: any) => (e: any) => (f: any) => (g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
      ) => (
        c: any,
        d: any,
      ) => (e: any) => (f: any) => (g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
      ) => (c: any, d: any) => (e: any) => (f: any, g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
      ) => (c: any, d: any) => (e: any, f: any) => (g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
      ) => (c: any, d: any) => (e: any, f: any) => (g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
      ) => (c: any, d: any) => (e: any, f: any, g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
      ) => (c: any, d: any, e: any) => (f: any, g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
      ) => (c: any, d: any, e: any) => (f: any) => (g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
      ) => (c: any, d: any, e: any) => (f: any) => (g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
      ) => (c: any, d: any, e: any) => (f: any, g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
      ) => (c: any, d: any, e: any, f: any) => (g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
      ) => (c: any, d: any, e: any, f: any) => (g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
      ) => (c: any, d: any, e: any, f: any, g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
        c: any,
      ) => (d: any, e: any, f: any, g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
        c: any,
      ) => (d: any) => (e: any, f: any, g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
        c: any,
      ) => (d: any) => (e: any) => (f: any, g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
        c: any,
      ) => (d: any) => (e: any) => (f: any) => (g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
        c: any,
      ) => (d: any) => (e: any) => (f: any) => (g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
        c: any,
      ) => (d: any) => (e: any) => (f: any, g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
        c: any,
      ) => (d: any) => (e: any, f: any) => (g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
        c: any,
      ) => (d: any) => (e: any, f: any) => (g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
        c: any,
      ) => (d: any) => (e: any, f: any, g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
        c: any,
      ) => (d: any, e: any) => (f: any, g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
        c: any,
      ) => (d: any, e: any) => (f: any) => (g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
        c: any,
      ) => (d: any, e: any) => (f: any) => (g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
        c: any,
      ) => (d: any, e: any) => (f: any, g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
        c: any,
      ) => (d: any, e: any, f: any) => (g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
        c: any,
      ) => (d: any, e: any, f: any) => (g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
        c: any,
      ) => (d: any, e: any, f: any, g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
        c: any,
        d: any,
      ) => (e: any, f: any, g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
        c: any,
        d: any,
      ) => (e: any) => (f: any, g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
        c: any,
        d: any,
      ) => (e: any) => (f: any) => (g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
        c: any,
        d: any,
      ) => (e: any) => (f: any) => (g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
        c: any,
        d: any,
      ) => (e: any) => (f: any, g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
        c: any,
        d: any,
      ) => (e: any, f: any) => (g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
        c: any,
        d: any,
      ) => (e: any, f: any) => (g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
        c: any,
        d: any,
      ) => (e: any, f: any, g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
        c: any,
        d: any,
        e: any,
      ) => (f: any, g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
        c: any,
        d: any,
        e: any,
      ) => (f: any) => (g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
        c: any,
        d: any,
        e: any,
      ) => (f: any) => (g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
        c: any,
        d: any,
        e: any,
      ) => (f: any, g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
        c: any,
        d: any,
        e: any,
        f: any,
      ) => (g: any, h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
        c: any,
        d: any,
        e: any,
        f: any,
      ) => (g: any) => (h: any) => any
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: any,
        b: any,
        c: any,
        d: any,
        e: any,
        f: any,
        g: any,
      ) => (h: any) => any
    >()
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

    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B, c: C, d: D, e: E, f: F, g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B) => (c: C, d: D, e: E, f: F, g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B) => (c: C) => (d: D, e: E, f: F, g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B) => (c: C) => (d: D) => (e: E, f: F, g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B) => (c: C) => (d: D) => (e: E) => (f: F, g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: A,
      ) => (b: B) => (c: C) => (d: D) => (e: E) => (f: F) => (g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: A,
      ) => (
        b: B,
      ) => (c: C) => (d: D) => (e: E) => (f: F) => (g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: A,
      ) => (b: B) => (c: C) => (d: D) => (e: E) => (f: F, g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B) => (c: C) => (d: D) => (e: E, f: F) => (g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: A,
      ) => (b: B) => (c: C) => (d: D) => (e: E, f: F) => (g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B) => (c: C) => (d: D) => (e: E, f: F, g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B) => (c: C) => (d: D, e: E) => (f: F, g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B) => (c: C) => (d: D, e: E) => (f: F) => (g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: A,
      ) => (b: B) => (c: C) => (d: D, e: E) => (f: F) => (g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B) => (c: C) => (d: D, e: E) => (f: F, g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B) => (c: C) => (d: D, e: E, f: F) => (g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B) => (c: C) => (d: D, e: E, f: F) => (g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B) => (c: C) => (d: D, e: E, f: F, g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B) => (c: C, d: D) => (e: E, f: F, g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B) => (c: C, d: D) => (e: E) => (f: F, g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B) => (c: C, d: D) => (e: E) => (f: F) => (g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: A,
      ) => (b: B) => (c: C, d: D) => (e: E) => (f: F) => (g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B) => (c: C, d: D) => (e: E) => (f: F, g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B) => (c: C, d: D) => (e: E, f: F) => (g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B) => (c: C, d: D) => (e: E, f: F) => (g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B) => (c: C, d: D) => (e: E, f: F, g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B) => (c: C, d: D, e: E) => (f: F, g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B) => (c: C, d: D, e: E) => (f: F) => (g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B) => (c: C, d: D, e: E) => (f: F) => (g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B) => (c: C, d: D, e: E) => (f: F, g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B) => (c: C, d: D, e: E, f: F) => (g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B) => (c: C, d: D, e: E, f: F) => (g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B) => (c: C, d: D, e: E, f: F, g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B, c: C) => (d: D, e: E, f: F, g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B, c: C) => (d: D) => (e: E, f: F, g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B, c: C) => (d: D) => (e: E) => (f: F, g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B, c: C) => (d: D) => (e: E) => (f: F) => (g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: A,
      ) => (b: B, c: C) => (d: D) => (e: E) => (f: F) => (g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B, c: C) => (d: D) => (e: E) => (f: F, g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B, c: C) => (d: D) => (e: E, f: F) => (g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B, c: C) => (d: D) => (e: E, f: F) => (g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B, c: C) => (d: D) => (e: E, f: F, g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B, c: C) => (d: D, e: E) => (f: F, g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B, c: C) => (d: D, e: E) => (f: F) => (g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B, c: C) => (d: D, e: E) => (f: F) => (g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B, c: C) => (d: D, e: E) => (f: F, g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B, c: C) => (d: D, e: E, f: F) => (g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B, c: C) => (d: D, e: E, f: F) => (g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B, c: C) => (d: D, e: E, f: F, g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B, c: C, d: D) => (e: E, f: F, g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B, c: C, d: D) => (e: E) => (f: F, g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B, c: C, d: D) => (e: E) => (f: F) => (g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B, c: C, d: D) => (e: E) => (f: F) => (g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B, c: C, d: D) => (e: E) => (f: F, g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B, c: C, d: D) => (e: E, f: F) => (g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B, c: C, d: D) => (e: E, f: F) => (g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B, c: C, d: D) => (e: E, f: F, g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B, c: C, d: D, e: E) => (f: F, g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B, c: C, d: D, e: E) => (f: F) => (g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B, c: C, d: D, e: E) => (f: F) => (g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B, c: C, d: D, e: E) => (f: F, g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B, c: C, d: D, e: E, f: F) => (g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B, c: C, d: D, e: E, f: F) => (g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A) => (b: B, c: C, d: D, e: E, f: F, g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B) => (c: C, d: D, e: E, f: F, g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B) => (c: C) => (d: D, e: E, f: F, g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B) => (c: C) => (d: D) => (e: E, f: F, g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B) => (c: C) => (d: D) => (e: E) => (f: F, g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B) => (c: C) => (d: D) => (e: E) => (f: F) => (g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (
        a: A,
        b: B,
      ) => (c: C) => (d: D) => (e: E) => (f: F) => (g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B) => (c: C) => (d: D) => (e: E) => (f: F, g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B) => (c: C) => (d: D) => (e: E, f: F) => (g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B) => (c: C) => (d: D) => (e: E, f: F) => (g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B) => (c: C) => (d: D) => (e: E, f: F, g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B) => (c: C) => (d: D, e: E) => (f: F, g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B) => (c: C) => (d: D, e: E) => (f: F) => (g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B) => (c: C) => (d: D, e: E) => (f: F) => (g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B) => (c: C) => (d: D, e: E) => (f: F, g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B) => (c: C) => (d: D, e: E, f: F) => (g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B) => (c: C) => (d: D, e: E, f: F) => (g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B) => (c: C) => (d: D, e: E, f: F, g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B) => (c: C, d: D) => (e: E, f: F, g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B) => (c: C, d: D) => (e: E) => (f: F, g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B) => (c: C, d: D) => (e: E) => (f: F) => (g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B) => (c: C, d: D) => (e: E) => (f: F) => (g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B) => (c: C, d: D) => (e: E) => (f: F, g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B) => (c: C, d: D) => (e: E, f: F) => (g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B) => (c: C, d: D) => (e: E, f: F) => (g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B) => (c: C, d: D) => (e: E, f: F, g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B) => (c: C, d: D, e: E) => (f: F, g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B) => (c: C, d: D, e: E) => (f: F) => (g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B) => (c: C, d: D, e: E) => (f: F) => (g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B) => (c: C, d: D, e: E) => (f: F, g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B) => (c: C, d: D, e: E, f: F) => (g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B) => (c: C, d: D, e: E, f: F) => (g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B) => (c: C, d: D, e: E, f: F, g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B, c: C) => (d: D, e: E, f: F, g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B, c: C) => (d: D) => (e: E, f: F, g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B, c: C) => (d: D) => (e: E) => (f: F, g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B, c: C) => (d: D) => (e: E) => (f: F) => (g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B, c: C) => (d: D) => (e: E) => (f: F) => (g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B, c: C) => (d: D) => (e: E) => (f: F, g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B, c: C) => (d: D) => (e: E, f: F) => (g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B, c: C) => (d: D) => (e: E, f: F) => (g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B, c: C) => (d: D) => (e: E, f: F, g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B, c: C) => (d: D, e: E) => (f: F, g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B, c: C) => (d: D, e: E) => (f: F) => (g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B, c: C) => (d: D, e: E) => (f: F) => (g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B, c: C) => (d: D, e: E) => (f: F, g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B, c: C) => (d: D, e: E, f: F) => (g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B, c: C) => (d: D, e: E, f: F) => (g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B, c: C) => (d: D, e: E, f: F, g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B, c: C, d: D) => (e: E, f: F, g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B, c: C, d: D) => (e: E) => (f: F, g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B, c: C, d: D) => (e: E) => (f: F) => (g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B, c: C, d: D) => (e: E) => (f: F) => (g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B, c: C, d: D) => (e: E) => (f: F, g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B, c: C, d: D) => (e: E, f: F) => (g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B, c: C, d: D) => (e: E, f: F) => (g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B, c: C, d: D) => (e: E, f: F, g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B, c: C, d: D, e: E) => (f: F, g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B, c: C, d: D, e: E) => (f: F) => (g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B, c: C, d: D, e: E) => (f: F) => (g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B, c: C, d: D, e: E) => (f: F, g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B, c: C, d: D, e: E, f: F) => (g: G, h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B, c: C, d: D, e: E, f: F) => (g: G) => (h: H) => I
    >()
    expectTypeOf<Ex>().toMatchTypeOf<
      (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => (h: H) => I
    >()
  })
})
