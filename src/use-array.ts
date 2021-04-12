import { isarray, isarrayof, Typeguard } from 'tiinvo';
import { useSafeFactory } from './use-safe';

export const useArray = useSafeFactory(isarray);

export const useArrayOf = <T>(typeguard: Typeguard<T>) => useSafeFactory(isarrayof(typeguard));
