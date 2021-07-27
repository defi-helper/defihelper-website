import { useCallback, useMemo, useState } from 'react';
import chunk from 'lodash.chunk';
import range from 'lodash.range';

const LIMIT = 5;

export const usePagination = (limit = LIMIT) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [countItems, setCountItems] = useState(0);

  const pages = useMemo(
    () => chunk(range(countItems, 0), limit),
    [countItems, limit]
  );

  const getPages = useCallback(
    (count: number) => {
      setCountItems(count);

      const newPages = chunk(range(count, 0), limit);

      return newPages.filter((_, index) => index <= currentPage).flat(1);
    },
    [limit, currentPage]
  );

  const nextPage = useCallback(() => {
    if (pages.length - 1 <= currentPage) return;

    setCurrentPage(currentPage + 1);
  }, [currentPage, pages.length]);

  return useMemo(
    () => ({
      currentPage,
      pages,
      getPages,
      nextPage
    }),
    [pages, getPages, nextPage, currentPage]
  );
};
