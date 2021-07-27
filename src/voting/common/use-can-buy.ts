import { useState, useCallback, useEffect } from 'react';

import { useBalance, useGovernanceContract } from 'src/common';

export const useCanBuy = () => {
  const [state, setState] = useState(false);

  const getBalance = useBalance();
  const governanceContract = useGovernanceContract();

  const handleGetGovernanceBalance = useCallback(async () => {
    if (!governanceContract) return;

    const balanceOfGovernance = await getBalance({
      tokenAddress: governanceContract.options.address
    });

    setState(balanceOfGovernance.toNumber() > 0);
  }, [governanceContract, getBalance]);

  useEffect(() => {
    handleGetGovernanceBalance();
  }, [handleGetGovernanceBalance]);

  return state;
};
