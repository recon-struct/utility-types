import type { IsEqual } from '~/extension/antecedent/is-equal'
import type { Expect } from '~/helper/expect'
import type { Circle } from './circle'
import type { Point } from './point'

describe('circle', () => {
  it('should define a circle as a 2 tuple of a point and a number', () => {
    type Ex1 = Circle<Point<0, 0>, 0>
    type Ex2 = Circle<Point<1, 1>, 1>
    type Ex3 = Circle<Point<-1, -1>, 1>

    type TestEx1 = Expect<
      IsEqual<Ex1, { type: 'circle'; center: Point<0, 0>; radius: 0 }>
    >
    type TestEx2 = Expect<
      IsEqual<Ex2, { type: 'circle'; center: Point<1, 1>; radius: 1 }>
    >
    type TestEx3 = Expect<
      IsEqual<Ex3, { type: 'circle'; center: Point<-1, -1>; radius: 1 }>
    >
  })
})
