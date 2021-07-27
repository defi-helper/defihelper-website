import React from 'react';
import ReactMarkdown from 'react-markdown';

import {
  Skeleton,
  MarkdownParagraph,
  MarkdownLink,
  MarkdownHeading
} from 'src/common';
import { useVotingProposalDescriptionStyles } from './voting-proposal-description.styles';

export type VotingProposalDescriptionProps = {
  loading: boolean;
  description?: string;
};

const renderers = {
  paragraph: MarkdownParagraph,
  link: MarkdownLink,
  heading: MarkdownHeading
};

export const VotingProposalDescription: React.FC<VotingProposalDescriptionProps> =
  (props) => {
    const classes = useVotingProposalDescriptionStyles();

    return (
      <div className={classes.description}>
        {props.loading && (
          <>
            <div className={classes.skeletonWrap}>
              <Skeleton height={24} maxWidth={560} />
              <Skeleton height={24} maxWidth={440} />
            </div>
            <div className={classes.skeletonWrap}>
              <Skeleton height={24} maxWidth={525} />
              <Skeleton height={24} maxWidth={560} />
              <Skeleton height={24} maxWidth={481} />
              <Skeleton height={24} maxWidth={560} />
              <Skeleton height={24} maxWidth={91} />
            </div>
          </>
        )}
        {!props.loading && props?.description && (
          <ReactMarkdown renderers={renderers}>
            {props.description}
          </ReactMarkdown>
        )}
      </div>
    );
  };
