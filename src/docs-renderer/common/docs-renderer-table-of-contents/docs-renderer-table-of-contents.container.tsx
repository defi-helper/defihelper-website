import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { useScrollSpy } from 'src/common';
import {
  TableOfContent,
  buildTableOfContents
} from '../build-table-of-contents';

const HEADINGS = 'h2, h3';

export type DocsRendererTableOfContentsContainerProps = {
  children: (
    tableOfContent: TableOfContent[],
    activeElement: string
  ) => JSX.Element;
};

export const DocsRendererTableOfContentsContainer: React.FC<DocsRendererTableOfContentsContainerProps> =
  (props) => {
    const [tableOfContent, setTableOfContent] = useState<TableOfContent[]>([]);

    const params = useParams<{ contractName?: string }>();
    const { hash } = useLocation();

    useEffect(() => {
      const headingElements = document.querySelectorAll(HEADINGS);

      headingElements.forEach((headingElement, index) => {
        headingElement.setAttribute('id', String(index));
      });

      setTableOfContent(buildTableOfContents([...headingElements]));

      document.getElementById(hash.slice(1))?.scrollIntoView();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params]);

    const activeElement = useScrollSpy({
      activeSectionDefault: '0',
      sectionElements: HEADINGS,
      offsetPx: 10,
      routerParams: params.contractName
    });

    return props.children(tableOfContent, activeElement);
  };
