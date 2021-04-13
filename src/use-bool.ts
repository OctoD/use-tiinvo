import { bind, fi, FnNullary } from 'tiinvo';
import { useValue } from './use-value';

export interface UseBool {
  /**
   * Sets the value to false
   */
  setfalse: FnNullary<void>;
  /**
   * Sets the value to true
   */
  settrue: FnNullary<void>;
  /**
   * Toggles the value. Ideal for checkboxes and switch components.
   * 
   * @since 1.0.0
   * @example
   * ```tsx
   * 
   * import React from 'react';
   * import { useBool, fi } from 'use-primitives';
   * 
   * export const MyComponent = () => {
   *    const accepts = useBool(true);
   *    const label = fi(accepts.value, `On`, `Off`);
   * 
   *    return (
   *      <label onClick={accepts.toggle}>
   *        <input value={accepts.value} type="checkbox" />
   *        {label}
   *      </label>
   *    )
   * }
   * ```
   */
  toggle: FnNullary<void>;
  /**
   * The value.
   */
  value: boolean;
}

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
export const useBool = (initialvalue = false): UseBool => {
  const { value, set } = useValue(initialvalue);
  const settrue = bind(set, true);
  const setfalse = bind(set, false);
  const toggle = fi(value, setfalse, settrue);

  return { setfalse, settrue, toggle, value };
}
