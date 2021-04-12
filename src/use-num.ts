import { isnumber, nullable, optional } from 'tiinvo';
import { useSafeFactory } from './use-safe';

/**
 * Handles numeric values. Like useSafe, it has a built-in validation
 * state.
 * 
 * @since 1.0.0
 * @example
 * ```tsx
 * import * as React from 'react';
 * import { bind, useNum, fi } from 'use-primitives';
 * 
 * export const MyWhopsieCounter = () => {
 *    const counter = useNum(0);
 *    const increment = bind(counter.set, counter.value + 1);
 *    const decrement = bind(counter.set, counter.value - 1);
 *    const breakthis = bind(counter.set, `hello world` as any); // :-(
 *    const valid = bind(counter.valid, `valid`, `not valid`);
 * 
 *    return (
 *      <div>
 *        <button onClick={increment}>+</button>
 *        <button onClick={decrement}>-</button>
 *        <button onClick={breakthis}>break everything</button>
 *        Current value is {counter.value} and is {valid}
 *      </div>
 *    );
 * }
 * ```
 */
export const useNum = useSafeFactory(isnumber);

/**
 * Same as `useNum`, but it accepts also `null` values.
 * @since 1.0.0
 */
export const useNullableNum = useSafeFactory(nullable(isnumber));

/**
 * Same as `useNum`, but it accepts also `undefined` values.
 * @since 1.0.0
 */
export const useOptionalNum = useSafeFactory(optional(isnumber));
