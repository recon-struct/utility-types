import { describe, expectTypeOf, it } from 'vitest'
import type { HasCaptureGroup } from '~/string/antecedent/has-capture-group'

describe('HasCaptureGroup', () => {
  it('should return true if `A` has a matches CaptureGroup `B`', () => {
    type Ex1 = HasCaptureGroup<'a {{b}} c'>
    type Ex2 = HasCaptureGroup<'a b c'>
    type Ex3 = HasCaptureGroup<'a ${b} c', { start: '${'; end: '}' }>

    expectTypeOf<Ex1>().toEqualTypeOf<true>()
    expectTypeOf<Ex2>().toEqualTypeOf<false>()
    expectTypeOf<Ex3>().toEqualTypeOf<true>()
  })
})
