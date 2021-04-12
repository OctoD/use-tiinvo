import { FnUnary, predicate } from 'tiinvo';
import { useValue, UseValue } from './use-value';

export interface UsePredicate<T> extends UseValue<T> {
  valid: boolean;
}

export type UsePredicateHook<T> = FnUnary<T, UsePredicate<T>>;

export const usePredicate = <T>(predicate: predicate.Predicate<T>): UsePredicateHook<T> => initialvalue => {
  const usevalue = useValue(initialvalue);
  const valid = predicate(usevalue.value);
  return { ...usevalue, valid }
}
