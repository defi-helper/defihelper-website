import React, { useMemo } from 'react';
import { nanoid } from 'nanoid';
import { useParams } from 'react-router-dom';

import { DocsRenderer } from 'src/docs-renderer';
import { Head } from 'src/common';
import { LandingLayout } from 'src/layouts';
import { DOCS } from '../common';

export const DocsDetail: React.FC = () => {
  const tableOfContents = useMemo(() => {
    return Object.keys(DOCS).map((text) => ({
      text,
      id: nanoid(),
      external: true
    }));
  }, []);

  const params = useParams<{ contractName: string }>();

  return (
    <>
      <Head title={params.contractName} />
      <LandingLayout>
        <DocsRenderer tableOfContents={tableOfContents}>
          {DOCS[params.contractName]}
        </DocsRenderer>
      </LandingLayout>
    </>
  );
};
