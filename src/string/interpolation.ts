import type { Internal } from '../helpers/internal'
import type { Capture } from './capture'
import type { CaptureGroup } from './utils'

/**
 * # 🚫 DO NOT EXPORT
 */
interface Opts<A extends string = string, B extends string = string>
  extends Internal {
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
  B extends Record<Capture<A, C>, string>,
  C extends CaptureGroup = CaptureGroup<'{{', '}}'>,
  Z extends Opts<string, Capture<A, C>> = Opts<A, Capture<A, C>>,
> = Z['value'] extends `${infer G}${C['start']}${infer H}${C['end']}${infer I}`
  ? H extends Z['variables']
    ? Interpolation<A, B, C, Opts<`${G}${B[H]}${I}`, Z['variables']>>
    : never
  : Z['value']
