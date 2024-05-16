import { describe, expectTypeOf, it } from 'vitest'
import type { ToNaturalNumber } from '~/helper/to-natural-number'

describe('ToNaturalNumber', () => {
  it('should convert a string to a natural number', () => {
    type Ex1 = ToNaturalNumber<'0'>
    type Ex2 = ToNaturalNumber<'1'>
    type Ex3 = ToNaturalNumber<'99'>

    expectTypeOf<Ex1>().toEqualTypeOf<0>()
    expectTypeOf<Ex2>().toEqualTypeOf<1>()
    expectTypeOf<Ex3>().toEqualTypeOf<99>()
  })
})
