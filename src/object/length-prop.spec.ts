import { describe, expectTypeOf, it } from 'vitest'
import type { LengthProp } from '~/object/length-prop'

describe('LengthProp', () => {
  it('returns length of a string', () => {
    type Ex = LengthProp<{ length: 20 }>
    expectTypeOf<Ex>().toEqualTypeOf<20>()
  })

  it('returns length of a tuple', () => {
    type Ex = LengthProp<[1, 2, 3]>
    expectTypeOf<Ex>().toEqualTypeOf<3>()
  })
})
