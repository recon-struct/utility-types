import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/test'
import type { HasCaptureGroup } from '~/string/antecedent/has-capture-group'

describe('HasCaptureGroup', () => {
  it('should return true if `A` has a matches CaptureGroup `B`', () => {
    type Ex1 = HasCaptureGroup<'a {{b}} c'>
    type Ex2 = HasCaptureGroup<'a b c'>
    type Ex3 = HasCaptureGroup<'a ${b} c', { start: '${'; end: '}' }>

    type TestEx1 = Expect<IsEqual<Ex1, true>>
    type TestEx2 = Expect<IsEqual<Ex2, false>>
    type TestEx3 = Expect<IsEqual<Ex3, true>>
  })
})
