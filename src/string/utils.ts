/**
 * An interface representing the start and end of a capture group
 * @typeParam A - The start of the capture group.
 * @typeParam B - The end of the capture group.
 * @group String
 * @example
 * ```
 * type Ex = CaptureGroup<'{{', '}}'> // { start: '{{', end: '}}' }
 * ```
 */
export interface CaptureGroup<
  A extends string = string,
  B extends string = string,
> {
  start: A
  end: B
}
