import { renderHook, act } from '@testing-library/react-hooks'
import { useValue } from '../use-value';

test(`useValue`, () => {
  const { result } = renderHook(() => useValue(100));

  expect(result.current.value).toBe(100);

  act(() => result.current.set(20));

  expect(result.current.value).toBe(20);
  
  act(result.current.reset);

  expect(result.current.value).toBe(100);
});
