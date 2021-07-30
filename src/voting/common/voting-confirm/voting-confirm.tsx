import React from 'react';

import { Button } from 'src/common';

export type VotingConfirmProps = {
  onVote: (vote: boolean) => void;
};

export const VotingConfirm: React.FC<VotingConfirmProps> = (props) => {
  return (
    <div>
      <Button onClick={() => props.onVote(true)}>Yes</Button>
      <Button onClick={() => props.onVote(false)}>No</Button>
    </div>
  );
};
