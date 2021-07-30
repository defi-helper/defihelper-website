import { useMemo } from 'react';
import { ethers, utils } from 'ethers';
import GOV_ABI from '@bondappetit/networks/abi/GovernorAlpha.json';
import { useAsyncRetry } from 'react-use';
import { useWeb3React } from '@web3-react/core';

import { useGovernorContract } from 'src/common';
import { FormattedEventData } from './voting.types';

const eventParser = new ethers.utils.Interface(GOV_ABI.abi);

export const useVotingEvents = () => {
  const governorContract = useGovernorContract();
  const { chainId } = useWeb3React();

  const events = useAsyncRetry(async () => {
    if (!governorContract) return;

    const proposal = await governorContract.methods.proposals('1').call();

    if (proposal.id === '0') return;

    const pastEvents = await governorContract.getPastEvents('ProposalCreated', {
      fromBlock: parseInt(proposal.startBlock, 10) - 1,
      toBlock: 'latest'
    });

    const formattedEventData = pastEvents?.map(({ raw, returnValues }) => {
      const eventParsed = eventParser.parseLog(raw).args;

      return {
        proposalId: returnValues.id,
        description: eventParsed.description,
        details: eventParsed.targets?.map((target: string, i: number) => {
          const signature = eventParsed.signatures[i];
          const [name, types] = signature
            .substr(0, signature.length - 1)
            .split('(');

          const calldata = eventParsed.calldatas[i];
          const decoded = utils.defaultAbiCoder.decode(
            types.split(','),
            calldata
          );

          return {
            target,
            functionSig: name,
            callData: decoded.join(', ')
          };
        })
      };
    });

    return formattedEventData ?? [];
  }, [governorContract, chainId]);

  return useMemo(() => {
    return events.value?.reduce<Record<string, FormattedEventData>>(
      (acc, formattedEvent) => {
        acc[formattedEvent.proposalId] = formattedEvent;

        return acc;
      },
      {}
    );
  }, [events.value]);
};
