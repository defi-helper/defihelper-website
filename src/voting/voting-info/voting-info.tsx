import clsx from 'clsx';
import React, { useMemo } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

import { Faq, Head, Link, PageWrapper, Typography } from 'src/common';
import { MainLayout } from 'src/layouts';
import { URLS } from 'src/router/urls';
import {
  useVotingProposalList,
  VotingInfoProposalList,
  VotingInfoDecision,
  FAQ
} from '../common';
import { useVotingInfoStyles } from './voting-info.styles';

export const VotingInfo: React.FC = () => {
  const classes = useVotingInfoStyles();

  const { proposals, pages } = useVotingProposalList(3);

  const proposalCount = useMemo(() => pages.flat().length, [pages]);

  return (
    <>
      <Head title="Shape the future of the protocol with the BondAppétit Governance token (BAG)" />
      <MainLayout>
        <PageWrapper className={classes.root}>
          <div className={clsx(classes.block, classes.titleWrap)}>
            <Typography variant="h1" align="center" className={classes.title}>
              Shape the future of the protocol with the BondAppétit Governance
              token (BAG)
            </Typography>
            <Typography variant="h4" align="center" className={classes.link}>
              <Link
                component={ReactRouterLink}
                to={`${URLS.whitepaper}#19`}
                color="blue"
              >
                Learn more about how governance works →
              </Link>
            </Typography>
          </div>
          <VotingInfoProposalList
            loading={proposals.loading}
            proposals={proposals.value}
            proposalCount={proposalCount}
            className={clsx(classes.proposals, classes.block)}
          />
          <VotingInfoDecision
            className={clsx(classes.proposals, classes.block)}
          />
          <Faq
            title="Learn more about BondAppétit Governance Token (BAG)"
            className={clsx(classes.decision, classes.block)}
          >
            {FAQ}
          </Faq>
        </PageWrapper>
      </MainLayout>
    </>
  );
};
