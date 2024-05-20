import type { IsElementOf } from "~/tuple/antecedent/is-element-of";
import { describe, expectTypeOf, it } from "vitest"

describe('IsElementOf', () => {
  it('should be true if B extends ElementOf<A>', () => {
    type Ex1 = IsElementOf<['a', 'b', 'c'], 'a'> // true
    expectTypeOf<Ex1>().toEqualTypeOf<true>()
  })

  it('should be false if B does not extend ElementOf<A>', () => {
    type Ex2 = IsElementOf<['a', 'b', 'c'], 'z'> // false
    expectTypeOf<Ex2>().toEqualTypeOf<false>()
  })
})