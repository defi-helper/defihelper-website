import { useAsyncFn } from 'react-use';

import { approvalNeeded } from './approve-tx';

export const useApprove = () => useAsyncFn(approvalNeeded, []);
