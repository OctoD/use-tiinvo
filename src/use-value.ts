import { useState } from 'react';
import { bind, FnNullary, FnUnary } from 'tiinvo';

export interface UseValueFns<T> {
  /**
   * Resets the value to it's initial state.
   * 
   * @since 1.0.0
   * @example
   * ```ts
   * const foo = useValue(10);
   * foo.set(20);
   * console.log(foo.value) // 20
   * foo.reset();
   * console.log(foo.value) // 10
   * ```
   */
  reset: FnNullary<void>;
  /**
   * Sets the value.
   * 
   * @since 1.0.0
   * @example
   * ```ts
   * const foo = useValue(10);
   * foo.set(20);
   * console.log(foo.value); // 20
   * ```
   */
  set: FnUnary<T, void>;
}

export interface UseValue<T> extends UseValueFns<T> {
  /**
   * The value.
   */
  value: T;
}

export const useValue = <T>(initialvalue: T): UseValue<T> => {
  const [value, set] = useState(initialvalue);
  const reset = bind(set, initialvalue);

  return { value, set, reset };
}
