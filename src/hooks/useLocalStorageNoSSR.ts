import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { useEventListener } from "usehooks-ts";

type Value = string | null;
type SetValue = Dispatch<SetStateAction<Value>>;

declare global {
  interface WindowEventMap {
    "sync-storage": StorageEvent;
  }
}

export function setLocalStorageItemAndDispatch(
  key: string,
  value: string | null,
) {
  value
    ? window.localStorage.setItem(key, value)
    : window.localStorage.removeItem(key);
  window.dispatchEvent(new StorageEvent("sync-storage", { key }));
}

// simplified version of https://usehooks-ts.com/react-hook/use-local-storage
// that initiate the state from localStorage directly and not from argument;
// this allow to have a state always in sync with localStorage even on the first render
export function useLocalStorageNoSSR(key: string): [Value, SetValue] {
  const readValue = useCallback(() => {
    return window.localStorage.getItem(key);
  }, [key]);

  const [storedValue, setStoredValue] = useState<Value>(() => readValue());

  const onStorageEvent = useCallback(
    (event: StorageEvent) => {
      if (event.key === key) {
        setStoredValue(readValue());
      }
    },
    [key, readValue],
  );
  useEventListener("storage", onStorageEvent);
  useEventListener("sync-storage", onStorageEvent);

  const setValue = useCallback(
    (value: Value | ((prev: Value) => Value)) => {
      const newValue = value instanceof Function ? value(readValue()) : value;
      setLocalStorageItemAndDispatch(key, newValue);
    },
    [key, readValue],
  );

  return [storedValue, setValue];
}
