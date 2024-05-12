import type { IsExtension } from '~/extension/antecedent/is-extension'
import type { CaptureGroup } from '~/string/utils'

/**
 * Evaluate if `A` has a matches CaptureGroup `B`
 * @typeParam A - The type to check.
 * @typeParam B - The CaptureGroup to match.
 * @group Antecedent
 * @group String
 * @example
 * ```
 * type Ex1 = HasCaptureGroup<'a {{b}} c'>                         // true
 * type Ex2 = HasCaptureGroup<'a b c'>                             // false
 * type Ex3 = HasCaptureGroup<'a ${b} c', CaptureGroup<'${', '}'>> // true
 * ```
 */
export type HasCaptureGroup<
  A extends string,
  B extends CaptureGroup = CaptureGroup<'{{', '}}'>,
> = IsExtension<A, `${string}${B['start']}${string}${B['end']}${string}`>
