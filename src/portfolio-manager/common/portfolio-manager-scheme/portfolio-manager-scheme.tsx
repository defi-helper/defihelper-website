import clsx from 'clsx';
import React from 'react';

import { Paper } from 'src/common/paper';
import { Typography } from 'src/common/typography';
import { ReactComponent as ClientProfilingIcon } from 'src/assets/icons/clientProfiling.svg';
import { ReactComponent as RiskAnalysisIcon } from 'src/assets/icons/riskAnalysis.svg';
import { ReactComponent as InvestmentRecommendationIcon } from 'src/assets/icons/investmentRecommendation.svg';
import { ReactComponent as PortfolioManagerArrowIcon } from 'src/assets/icons/portfolioManagerArrow.svg';
import flower from 'src/assets/images/flower.png';
import cake from 'src/assets/images/cake.png';
import curve from 'src/assets/images/curve.png';
import happyFans from 'src/assets/images/happy-fans.png';
import percent from 'src/assets/images/percent.png';
import * as styles from './portfolio-manager-scheme.css';

export type PortfolioManagerSchemeProps = {
  className?: string;
};

export const PortfolioManagerScheme: React.VFC<PortfolioManagerSchemeProps> = (
  props
) => {
  return (
    <div className={clsx(styles.root, props.className)}>
      <div className={styles.paperWrap}>
        <Paper radius={10} className={styles.paper}>
          <ClientProfilingIcon />
          <div className={styles.paperText}>
            <Typography className={styles.title}>Client profiling</Typography>
            <Typography variant="body2">
              Risk-taker; risk-averse; DeFi farmer; stablecoin lover etc.
            </Typography>
          </div>
        </Paper>
        <PortfolioManagerArrowIcon className={styles.arrow} />
      </div>
      <div className={styles.paperWrap}>
        <Paper radius={10} className={styles.paper}>
          <RiskAnalysisIcon />
          <div className={styles.paperText}>
            <Typography className={styles.title}>
              Risk analysis of protocols and tokens
            </Typography>
            <Typography variant="body2">
              DFH constantly assesses all connected protocols and tokens and
              rate them as following: &apos;low risk&apos;, &apos;medium
              risk&apos;, &apos;high risk&apos;
            </Typography>
          </div>
        </Paper>
        <PortfolioManagerArrowIcon className={styles.arrow} />
      </div>
      <Paper radius={10} className={styles.investmentRecommendation}>
        <InvestmentRecommendationIcon
          className={styles.investmentRecommendationIcon}
        />
        <div className={styles.investmentRecommendationText}>
          <Typography
            className={styles.investmentRecommendationTitle}
            variant="h4"
            as="p"
          >
            Investment recommendations and management
          </Typography>
          <Typography
            variant="body2"
            as="div"
            className={styles.investmentRecommendationDescription}
          >
            Based on a client&apos;s profile and the risk , DFH recommends a
            custom investment strategy to the client
            <Typography variant="inherit" as="div">
              <Typography variant="inherit" className={styles.green}>
                Example:
              </Typography>{' '}
              40% in Curve | 40% in Yearn | 20% in risky high-yield farms
            </Typography>
          </Typography>
          <Paper radius={10} className={styles.investmentRecommendationPercent}>
            <img
              src={percent}
              alt=""
              className={styles.investmentRecommendationPercentIcon}
            />
            <Typography variant="h4" as="span">
              40%
            </Typography>
          </Paper>
          <Paper radius={10} className={styles.investmentRecommendationPercent}>
            <img
              src={curve}
              alt=""
              className={styles.investmentRecommendationPercentIcon}
            />
            <Typography variant="h4" as="span">
              40%
            </Typography>
          </Paper>
          <Paper radius={10} className={styles.investmentRecommendationPercent}>
            <img
              src={happyFans}
              alt=""
              className={styles.investmentRecommendationPercentIcon}
            />
            <img
              src={cake}
              alt=""
              className={styles.investmentRecommendationPercentIcon}
            />
            <img
              src={flower}
              alt=""
              className={styles.investmentRecommendationPercentIcon}
            />
            <Typography variant="h4" as="span">
              20%
            </Typography>
          </Paper>
        </div>
      </Paper>
    </div>
  );
};
