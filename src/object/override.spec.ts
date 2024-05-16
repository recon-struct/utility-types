import { describe, expectTypeOf, it } from 'vitest'
import type { Override } from '~/object/override'

describe('Override', () => {
  it('returns the intersection of `A` and `B` for any conflicts defer to `B`', () => {
    type Ex = Override<{ a: number; b: number }, { a: string }>['a']

    expectTypeOf<Ex>().toEqualTypeOf<string>()
  })
})
