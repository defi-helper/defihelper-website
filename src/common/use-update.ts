import { useMemo, useState, useCallback } from 'react';

export const useUpdate = (): [number, () => void] => {
  const [updateCount, setUpdateCount] = useState(0);

  const handleUpdate = useCallback(() => {
    setUpdateCount(updateCount + 1);
  }, [updateCount]);

  return useMemo(
    () => [updateCount, handleUpdate],
    [handleUpdate, updateCount]
  );
};
