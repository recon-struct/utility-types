import { describe, expectTypeOf, it } from 'vitest'
import { If } from './if'

describe('If', () => {
  it('should evaluate `A → B`', () => {
    type Ex1 = If<true, 'a', 'b'>
    type Ex2 = If<false, 'a', 'b'>

    expectTypeOf<Ex1>().toEqualTypeOf<'a'>()
    expectTypeOf<Ex2>().toEqualTypeOf<'b'>()
  })

  it('should default to returning true if no false case is provided', () => {
    type Ex = If<true>

    expectTypeOf<Ex>().toEqualTypeOf<true>()
  })

  it('should default to returning false if no true case is provided', () => {
    type Ex = If<false>

    expectTypeOf<Ex>().toEqualTypeOf<false>()
  })

  it('should default to returning false if no cases are provided', () => {
    type Ex = If<never>

    expectTypeOf<Ex>().toEqualTypeOf<false>()
  })

  it('should allow overriding the consequent case if true', () => {
    type Ex = If<true, 'a'>

    expectTypeOf<Ex>().toEqualTypeOf<'a'>()
  })

  it('should default to false for the alternate case if no cases are provided', () => {
    type Ex = If<never, 'a'>

    expectTypeOf<Ex>().toEqualTypeOf<false>()
  })
})
