import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-test-renderer';
import { isstring } from 'tiinvo';
import { useSafeFactory } from '../use-safe';

test(`useSafe`, () => {
  const { result } = renderHook(() => useSafeFactory(isstring)(`hello`));

  expect(result.current.valid).toBeTruthy();
  expect(result.current.value).toBe(`hello`);

  act(() => result.current.set(100 as any));
  
  expect(result.current.valid).toBeFalsy();
});
