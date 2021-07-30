import React from 'react';
import { useMedia } from 'react-use';

import { AddTokenMetamask } from 'src/common/add-token-metamask';
import { InfoCardWrapper } from '../info-card-wrapper';
import { useInfoCardSuccessStyles } from './info-card-success.styles';

export type InfoCardSuccessProps = {
  onClick: () => void;
  purchased: string;
  tokenName?: string;
  token?: string;
};

export const InfoCardSuccess: React.FC<InfoCardSuccessProps> = (props) => {
  const isBiggerThanMediumDesktop = useMedia('(min-width: 960px)');
  const classes = useInfoCardSuccessStyles();

  return (
    <InfoCardWrapper
      title={<span className={classes.heading}>Congratulations!</span>}
      subtitle={
        props.children ?? (
          <>
            You have successfully
            <br />
            purchased
            {!isBiggerThanMediumDesktop ? <>&nbsp;</> : ' '}
            {props.purchased}&nbsp;{props.tokenName}
          </>
        )
      }
      onClick={props.onClick}
      button="Finish!"
    >
      {props.token && (
        <AddTokenMetamask
          className={classes.addToMetaMask}
          token={props.token}
        />
      )}
    </InfoCardWrapper>
  );
};
