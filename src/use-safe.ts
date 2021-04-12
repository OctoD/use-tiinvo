import { FnUnary, Typeguard } from 'tiinvo';
import { useValue, UseValue } from './use-value';

export interface UseSafe<T> extends UseValue<T> {
  valid: boolean;
}

export type UseSafeHook<T> = FnUnary<T, UseSafe<T>>;

/**
 * Given a `Typeguard<T>` returns a SafeHook<T>.
 * This hook value will be `valid` if the typeguard is satisfied.
 * 
 * @since 1.0.0
 * @example
 * ```tsx
 * import * as React from 'react';
 * import { bind, fi, isnull, useSafeFactory, nullable, isstring } from 'use-primitives';
 * 
 * const mynullable = useSafeFactory(nullable(isstring));
 * 
 * export const MyComponent = () => {
 *    const message = mynullable(`hello world`);
 *    const breakthis = bind(message.set, null); // :-)
 *    const valid = fi(message.valid, `valid`, `not valid`);
 *    const value = fi(isnull(message.value), `nothing`, message.value);
 * 
 *    return (
 *      <label>
 *        <input onChange={pipe(mapvalue, message.set)} value={value} />
 *        Your greeting message is {valid} and says {value}
 *        <br />
 *        <button onClick={breakthis}>this won't break everything</button>
 *      </label>
 * }
 * 
 * ```
 * 
 * @param typeguard 
 * @returns 
 */
export const useSafeFactory = <T>(typeguard: Typeguard<T>): UseSafeHook<T> => initialValue => {
  const { reset, set, value } = useValue(initialValue);
  const valid = typeguard(value);
  return { reset, set, value, valid };
}
