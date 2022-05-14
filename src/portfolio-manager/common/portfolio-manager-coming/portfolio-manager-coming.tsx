import clsx from 'clsx';
import React from 'react';

import { Typography } from 'src/common/typography';
import * as styles from './portfolio-manager-coming.css';

export type PortfolioManagerComingProps = {
  className?: string;
};

const TEXT = [
  {
    title: 'Analysis of Protocols and Token',
    text: 'We are developing a risk model that will regularly analyze all connected protocols and tokens according to a variety of parameters: average cost at the ICO/IDO/IEO stage, price dynamics, the presence of investments from the largest funds, frequency of changes in the program code of the project, audience scores, and more. Based on the results of the analysis, the algorithm will assign a certain rating to each token, namely — low, medium, or high risk. Based on the rating and by relying on its own risk model, the algorithm will individually select how much and in which protocols to invest.'
  },
  {
    title: 'User Analysis',
    text: "At first login into the personal account, DFH will analyze the user's current portfolio and transaction history (profitability, risk, balance). Next, DFH will ask several questions to find out the client's socio-demographic profile, as well as their goals, expectations, and preferences. Based on the collected data, the service will form a client profile — risk-averse, risk-prone, stablecoin lover, DeFi farmer, etc."
  },
  {
    title: 'Investment Recommendations and Management',
    text: 'After defining the user profile, DFH will propose an individual investment strategy. For example, invest 40% in Curve, another 40% in Yearn, and the remaining 20% in new farms. As income accumulates or rates change, the system proposes portfolio rebalancing options. For example, investing income in a new protocol or, if there is an appetite for risk, investing in more risky protocols with high returns.'
  },
  {
    title: 'Trailing Stop Loss and Trailing Take Profit',
    text: 'We are working on automating trailing stop loss and trailing take profit in partnership with a major DeFi protocol.'
  }
];

export const PortfolioManagerComing: React.VFC<PortfolioManagerComingProps> = (
  props
) => {
  return (
    <div className={clsx(props.className, styles.root)}>
      <Typography
        variant="h2"
        family="mono"
        transform="uppercase"
        className={styles.title}
      >
        What&apos;s Coming Up In The Near Future
      </Typography>
      <div className={styles.grid}>
        {TEXT.map((textItem) => (
          <div key={textItem.title}>
            <Typography
              className={styles.cardTitle}
              variant="h4"
              family="mono"
              transform="uppercase"
            >
              {textItem.title}
            </Typography>
            <Typography className={styles.cardText}>{textItem.text}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
};
