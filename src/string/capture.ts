import type { CaptureGroup } from '~/helper/capture-group'

export interface CaptureOpts<A extends string = string> {
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
  Z extends CaptureOpts = CaptureOpts<never>,
> = A extends `${string}${B['start']}${infer C}${B['end']}${infer D}`
  ? Capture<D, B, CaptureOpts<Z['value'] | C>>
  : Z['value']
