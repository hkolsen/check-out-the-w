import { useMemo, useState } from 'react';

export function useFocused() {
  const [focused, setFocused] = useState(false);
  const onFocus = useMemo(
    () => () => {
      setFocused(true);
    },
    [],
  );
  const onBlur = useMemo(
    () => () => {
      setFocused(false);
    },
    [],
  );
  return useMemo(() => ({ focused, onFocus, onBlur }), [
    focused,
    onBlur,
    onFocus,
  ]);
}