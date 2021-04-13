import { FnUnary } from 'tiinvo';
import { UsePredicate, UsePredicateHook } from './use-predicate';

export interface UseValidate<T, K> extends UsePredicate<T> {
  /**
   * The error message `K`. It is `K` if invalid, otherwise is `undefined`.
   * 
   * @since 1.0.0
   */
  message?: K;
}

export type UseValidateHook<T, K> = FnUnary<T, UseValidate<T, K>>;

export const useValidate = <T, K>(hook: UsePredicateHook<T>, errormessage: K): UseValidateHook<T, K> => initialvalue => {
  const safe = hook(initialvalue);
  return {... safe, message: safe.valid ? undefined : errormessage };
}
