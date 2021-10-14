import clsx from 'clsx';
import React from 'react';

import { Typography } from 'src/common/typography';
import { Grid } from 'src/common/grid';
import { Paper } from 'src/common/paper';
import { Button } from 'src/common/button';
import * as styles from './main-editor.css';

export type MainEditorProps = {
  className?: string;
};

export const MainEditor: React.VFC<MainEditorProps> = (props) => {
  return (
    <div className={clsx(props.className)}>
      <Grid.Container>
        <Paper className={styles.list}>
          <div className={styles.card}>
            <Typography
              variant="h3"
              transform="uppercase"
              family="mono"
              className={styles.cardTitle}
            >
              Build and Earn
            </Typography>
            <Typography className={styles.cardDescription}>
              It is crucial for DFH to move fast — add new features, connect new
              protocols and blockchains, and upgrade automation scripts. For
              speedy development, we need all the help we can get.
            </Typography>
            <Typography className={styles.cardDescription}>
              We are professional developers with over 20 years of combined web
              development experience. Over the last five years, we have been
              primarily engaged in the launch of blockchain projects.
            </Typography>
            <Typography className={styles.cardDescription}>
              We are interested in cooperation on:
            </Typography>
            <Typography className={styles.cardDescription}>
              1) Front-end development (TypeScript, NodeJS)
              <br />
              2) Back-end development (TypeScript, NodeJS)
              <br />
              3) Blockchain development (Solidity, Ride, etc.)
            </Typography>
            <Typography className={styles.cardDescription}>
              If you find your competencies on this list and want to make some
              good money, then please contact us and we will discuss the
              details.
            </Typography>
            <Button variant="outlined">Become a Developer</Button>
          </div>
          <div className={styles.separator} />
          <div className={styles.card}>
            <Typography variant="body2" className={styles.code} as="div">
              <div className={styles.numbers}>
                {Array.from(Array(24)).map((_, i) => (
                  <div key={String(i)}>{i + 1}</div>
                ))}
              </div>
              <div>
                function <span className={styles.green}>claim</span>( &nbsp;
                <span className={styles.blue}>address</span> account, &nbsp;
                <span className={styles.blue}>uint256</span> gasFee, &nbsp;
                <span className={styles.blue}>uint256</span> protocolFee, &nbsp;
                <span className={styles.blue}>string</span>{' '}
                <span className={styles.red}>memory</span> description
              </div>
              <div>
                ) <span className={styles.red}>external returns</span> (
                <span className={styles.blue}>uint256</span>) {'{'}
              </div>
              <div>
                &nbsp;
                <span className={styles.red}>require</span>(
              </div>
              <div>
                &nbsp;&nbsp;
                <span className={styles.blue}>tx</span>.origin == account ||
                _consumers.<span className={styles.brown}>contains</span>(
                <span className={styles.blue}>tx</span>
                .origin),
              </div>
              <div>
                &nbsp;&nbsp;&quot;Balance: caller is not a consumer&quot;
              </div>
              <div>&nbsp;);</div>
              <br />
              <div>
                &nbsp;
                <span className={styles.blue}>uint256</span> amount = gasFee +
                protocolFee;
              </div>
              <div>
                &nbsp;
                <span className={styles.red}>require</span>(amount &gt; 0,
                &quot;Balance::claim: negative or zero claim&quot;);
              </div>
              <div>
                &nbsp;
                <span className={styles.red}>require</span>(<br />
                &nbsp;&nbsp;amount &lt;={' '}
                <span className={styles.brown}>netBalanceOf</span>
                (account),
                <br />
                &nbsp;&nbsp;&quot;Balance::claim: claim amount exceeds net
                balance&quot;
                <br />
                &nbsp;);
              </div>
              <br />
              <div>&nbsp;claimOf[account] += amount;</div>
              <div>&nbsp;billCount++;</div>
              <div>
                &nbsp;bills[billCount] ={' '}
                <span className={styles.brown}>Bill</span>
                (&nbsp;&nbsp;billCount, &nbsp;&nbsp;
                <span className={styles.brown}>_msgSender</span>(),
                &nbsp;&nbsp;account, &nbsp;&nbsp;gasFee, &nbsp;&nbsp;
                &nbsp;&nbsp;protocolFee, &nbsp;&nbsp;BillStatus.Pending &nbsp;);
              </div>
              <div>
                &nbsp;
                <span className={styles.red}>emit</span>{' '}
                <span className={styles.green}>Claim</span>(account, billCount,
                description);
              </div>
              <br />
              <div>
                &nbsp;
                <span className={styles.red}>return</span> billCount;
              </div>
              <div>{'}'}</div>
            </Typography>
          </div>
        </Paper>
      </Grid.Container>
    </div>
  );
};
