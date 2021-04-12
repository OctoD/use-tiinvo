import { isstring, nullable, optional } from 'tiinvo';
import { useSafeFactory } from './use-safe';

/**
 * Handles string values. Like useSafe, it has a built-in validation
 * state.
 * 
 * @since 1.0.0
 * @example
 * ```tsx
 * import * as React from 'react';
 * import { bind, useStr, fi, pipe } from 'use-primitives';
 * 
 * const mapvalue = (event: React.ChangeEvent<HTMLInputElement>) => event.target.value;
 * 
 * export const MyWhopsieCounter = () => {
 *    const message = useStr(`hello world`);
 *    const breakthis = bind(message.set, 1000 as any); // :-(
 *    const valid = fi(message.valid, `valid`, `not valid`);
 * 
 *    return (
 *      <label>
 *        <input onChange={pipe(mapvalue, message.set)} value={message.value} />
 *        Your greeting message is {valid} and says {message.value}
 *        <br />
 *        <button onClick={breakthis}>break everything</button>
 *      </label>
 *    );
 * }
 * ```
 */
export const useStr = useSafeFactory(isstring);

/**
 * Same as `useStr`, but it accepts also `null` values.
 * @since 1.0.0
 */
export const useNullableStr = useSafeFactory(nullable(isstring));

/**
 * Same as `useStr`, but it accepts also `null` values.
 * @since 1.0.0
 */
export const useOptionalStr = useSafeFactory(optional(isstring));
