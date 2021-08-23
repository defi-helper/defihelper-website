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
              Build compelling use-cases and monetize their models to earn money
              by serving your users with high reliability.
            </Typography>
            <Button variant="outlined">Become a Developer</Button>
          </div>
          <div className={styles.separator} />
          <div className={styles.card}>
            <Typography variant="body2" className={styles.code}>
              <div className={styles.numbers}>
                {Array.from(Array(32)).map((_, i) => (
                  <div key={String(i)}>{i + 1}</div>
                ))}
              </div>
              <div>
                function <span className={styles.green}>claim</span>(
              </div>
              <div>
                &nbsp;
                <span className={styles.blue}>address</span> account,
              </div>
              <div>
                &nbsp;
                <span className={styles.blue}>uint256</span> gasFee,
              </div>
              <div>
                &nbsp;
                <span className={styles.blue}>uint256</span> protocolFee,
              </div>
              <div>
                &nbsp;
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
                (<br />
                &nbsp;&nbsp;billCount,
                <br />
                &nbsp;&nbsp;
                <span className={styles.brown}>_msgSender</span>(),
                <br />
                &nbsp;&nbsp;account,
                <br />
                &nbsp;&nbsp;gasFee, &nbsp;&nbsp;
                <br />
                &nbsp;&nbsp;protocolFee,
                <br />
                &nbsp;&nbsp;BillStatus.Pending
                <br />
                &nbsp;);
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
