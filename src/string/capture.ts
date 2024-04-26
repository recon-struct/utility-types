import type { Internal } from '../helpers/internal'
import type { CaptureGroup } from './utils'

/**
 * # 🚫 DO NOT EXPORT
 */
interface Opts<A extends string = string> extends Internal {
  value: A
}

/**
 * Evaluate the union of the strings in `A` matching capture group `B`
 * @typeParam A - The string to capture from.
 * @typeParam B - The capture group to use for the capture.
 * @group String
 * @example
 * ```
 * type Ex = Capture<'{{a}} b {{c}}', { start: '{{', end: '}}' }> // 'a' | 'c'
 * ```
 */
export type Capture<
  A extends string,
  B extends CaptureGroup = CaptureGroup<'{{', '}}'>,
  Z extends Opts = Opts<never>,
> = A extends `${string}${B['start']}${infer C}${B['end']}${infer D}`
  ? Capture<D, B, Opts<Z['value'] | C>>
  : Z['value']
