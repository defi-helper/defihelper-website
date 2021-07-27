import React from 'react';
import { useHistory } from 'react-router-dom';

import { URLS } from 'src/router/urls';
import { VotingInfoCard } from '../common';
import { useStakingTotal } from './use-staking-total';

export const VotingStaking: React.VFC = () => {
  const history = useHistory();
  const { loading, leftTokens, totalSupplySum, percent } = useStakingTotal();

  return (
    <VotingInfoCard
      title="Earn by staking"
      subtitle={`${leftTokens} of ${totalSupplySum} BAG left to earn`}
      loading={loading}
      onClick={() => history.push(URLS.staking.list)}
      buttonTitle="Earn BAG"
      percent={percent.toString(10)}
      description={
        'Earn governance tokens as rewards for supporting the protocol’s activities. ' +
        'Buy USDap, stake your assets in liquidity pools and receive BAGs in return.'
      }
    />
  );
};
