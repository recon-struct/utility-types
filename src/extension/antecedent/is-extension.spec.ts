import type { IsExtension } from '~/extension/antecedent/is-extension'
import type { Expect } from '~/helper/test'
import type { IsEqual } from './is-equal'

describe('IsExtension', () => {
  it('should return true if `A` extends `B`', () => {
    type Ex1 = IsExtension<string, string | number>
    type Ex2 = IsExtension<number, string | number>
    type Ex3 = IsExtension<'test', string>

    type TestEx1 = Expect<IsEqual<Ex1, true>>
    type TestEx2 = Expect<IsEqual<Ex2, true>>
    type TestEx3 = Expect<IsEqual<Ex3, true>>
  })

  it('should return false if `A` does not extend `B`', () => {
    type Ex1 = IsExtension<[string, 'a'], ['a', string]>
    type Ex2 = IsExtension<['a', string], [string, 'a']>

    type TestEx1 = Expect<IsEqual<Ex1, false>>
    type TestEx2 = Expect<IsEqual<Ex2, false>>
  })
})
