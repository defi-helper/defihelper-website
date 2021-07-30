import BN from 'bignumber.js';

import { IERC20 } from 'src/generate/IERC20';
import { estimateGas } from './estimate-gas';

type Options = {
  token: IERC20;
  owner: string;
  spender: string;
  amount: string | number;
};

export async function approvalNeeded({
  token,
  owner,
  spender,
  amount
}: Options) {
  const allowance = new BN(
    await token.methods.allowance(owner, spender).call()
  );
  const isAlreadyApproved = allowance.isGreaterThanOrEqualTo(amount);

  return {
    reset: !isAlreadyApproved && allowance.isGreaterThan(0),
    approve: !isAlreadyApproved,
    allowance,
    amount
  };
}
export async function reset({ token, owner, spender }: Options) {
  const tx = token.methods.approve(spender, '0');
  await tx.send({
    from: owner,
    gas: await estimateGas(tx, { from: owner })
  });
}

export async function approveAll({ token, owner, spender }: Options) {
  const tx = token.methods.approve(
    spender,
    new BN(2).pow(256).minus(1).toFixed(0)
  );
  await tx.send({
    from: owner,
    gas: await estimateGas(tx, { from: owner })
  });
}
