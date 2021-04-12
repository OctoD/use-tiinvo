import { useState } from 'react';
import { bind, FnNullary, FnUnary } from 'tiinvo';

export interface UseValueFns<T> {
  reset: FnNullary<void>;
  set: FnUnary<T, void>;
}

export interface UseValue<T> extends UseValueFns<T> {
  value: T;
}

export const useValue = <T>(initialvalue: T): UseValue<T> => {
  const [value, set] = useState(initialvalue);
  const reset = bind(set, initialvalue);

  return { value, set, reset };
}
