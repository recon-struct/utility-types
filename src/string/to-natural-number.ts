import type { IsExtension } from '~/any/antecedent/is-extension'
import type { Internal } from '~/helpers/internal'
import type { Add } from '~/math/add'
import type { Multiply } from '~/math/multiply'
import type { StringLength } from './string-length'

interface DigitValue {
  '0': 0
  '1': 1
  '2': 2
  '3': 3
  '4': 4
  '5': 5
  '6': 6
  '7': 7
  '8': 8
  '9': 9
}

interface PlaceValue {
  1: 1
  2: 10
  3: 100
}

type StringShift<A extends string> = A extends `${infer B}${string}` ? B : never

type StringTail<A extends string> = A extends `${string}${infer B}` ? B : never

interface ToNaturalNumberOpts<
  A extends string = string,
  B extends number = number,
> extends Internal {
  remaining: A
  sum: B
  leftMostDigit: StringShift<A>
  length: StringLength<A>
}

/**
 * Converts a string representation of a natural number to its numeric value.
 * @typeParam A - The input string.
 * @typeParam B - Optional configuration options.
 * @group String
 * @experimental
 * @example
 * ```
 * type Ex1 = ToNaturalNumber<'123'> // 123
 * type Ex2 = ToNaturalNumber<'0'> // 0
 * type Ex3 = ToNaturalNumber<'000'> // 0
 * ```
 */
export type ToNaturalNumber<
  A extends string,
  B extends ToNaturalNumberOpts<A> = ToNaturalNumberOpts<A, 0>,
> = B['leftMostDigit'] extends ''
  ? B['sum']
  : IsExtension<A, `${number}`> extends true
    ? B['leftMostDigit'] extends keyof DigitValue
      ? B['length'] extends keyof PlaceValue
        ? ToNaturalNumber<
            StringTail<A>,
            ToNaturalNumberOpts<
              StringTail<A>,
              Add<
                Multiply<
                  DigitValue[B['leftMostDigit']],
                  PlaceValue[B['length']]
                >,
                B['sum']
              >
            >
          >
        : number
      : never
    : never