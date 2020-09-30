import { useState, useEffect } from 'react';

function usePersistedStateTheme(key, initialState) {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key);

    console.tron.log(storageValue);

    if (storageValue) return JSON.parse(storageValue);
    return initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersistedStateTheme;
