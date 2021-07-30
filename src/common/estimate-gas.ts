import BN from 'bignumber.js';
import {
  PayableTx,
  PayableTransactionObject,
  NonPayableTx,
  NonPayableTransactionObject
} from 'src/generate/types';

export interface GasSlippageTx {
  gasSlippage?: number;
}

export async function estimateGas<T>(
  tx: NonPayableTransactionObject<T> | PayableTransactionObject<T>,
  options?: (NonPayableTx | PayableTx) & GasSlippageTx
): Promise<string> {
  const autoEstimateGas = await tx.estimateGas(options);

  return new BN(autoEstimateGas)
    .multipliedBy(options?.gasSlippage || 1.2)
    .toFixed(0);
}
