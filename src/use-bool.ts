import { useValue } from './use-value';
import { bind, fi } from 'tiinvo';

/**
 * Good for everything which have an on/off state.
 * 
 * @since 1.0.0
 * @example
 * ```tsx
 * import React from 'react';
 * import { useBool, fi } from 'use-primitives';
 * 
 * export const MyComponent = () => {
 *    const state = useBool();
 *    const label = fi(state.value, `on`, `off`);
 * 
 *    return (
 *        <button onClick={state.toggle}>
 *          Toggle is { label }
 *        </button>
 *    );
 * }
 * ```
 * 
 * @param {boolean} [initialvalue] is optional. `true` or `false` is admitted.
 * @returns 
 */
export const useBool = (initialvalue = false) => {
  const { value, set } = useValue(initialvalue);
  const settrue = bind(set, true);
  const setfalse = bind(set, false);
  const toggle = fi(value, setfalse, settrue);

  return { setfalse, settrue, toggle, value };
}
