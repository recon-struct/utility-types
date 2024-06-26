import type { CaptureGroup } from '~/helper/capture-group'
import type { Options } from '~/helper/options'
import type { Capture } from '~/string/capture'

export type InterpolationVariable = string | number | bigint | boolean

export interface InterpolationOpts<
  A extends string = string,
  B extends InterpolationVariable = InterpolationVariable,
> extends Options<'Interpolation'> {
  value: A
  variables: B
}

/**
 * Evaluate template `A` interpolating variables of `A` with values from `B`
 * @typeParam A - The string template to interpolate.
 * @typeParam B - The object containing the variables to interpolate.
 * @typeParam C - Optional. The capture group to use for the interpolation.
 * @group String
 * @example
 * ```
 * type Ex = Interpolation<'Hello {{a}}', { a: 'World' }> // 'Hello World!'
 * ```
 */
export type Interpolation<
  A extends string,
  B extends Record<Capture<A, C>, InterpolationVariable>,
  C extends CaptureGroup = CaptureGroup<'{{', '}}'>,
  Z extends InterpolationOpts<string, Capture<A, C>> = InterpolationOpts<
    A,
    Capture<A, C>
  >,
> = Z['value'] extends `${infer G}${C['start']}${infer H}${C['end']}${infer I}`
  ? H extends Z['variables']
    ? Interpolation<
        A,
        B,
        C,
        InterpolationOpts<`${G}${B[H]}${I}`, Z['variables']>
      >
    : never
  : Z['value']
