import clsx from 'clsx';
import React from 'react';

import { Grid } from 'src/common/grid';
import { Typography } from 'src/common/typography';
import AaeveIcon from 'src/assets/icons/protocols/aave-aave-logo.svg';
import UniswapIcon from 'src/assets/icons/protocols/uniswap-uni-logo.svg';
import MakerdaoIcon from 'src/assets/icons/protocols/maker-mkr-logo.svg';
import BalancerIcon from 'src/assets/icons/protocols/balancer-bal-logo.svg';
import CakeIcon from 'src/assets/icons/protocols/cake.svg';
import PaxIcon from 'src/assets/icons/protocols/paxos-standard-pax-logo.svg';
import SushiIcon from 'src/assets/icons/protocols/sushiswap-sushi-logo.svg';
import CompoundIcon from 'src/assets/icons/protocols/compound-comp-logo.svg';
import CurveIcon from 'src/assets/icons/protocols/curve-dao-token-crv-logo.svg';
import DecentralandIcon from 'src/assets/icons/protocols/decentraland-mana-logo.svg';
import FilecoinIcon from 'src/assets/icons/protocols/filecoin-fil-logo.svg';
import BancorIcon from 'src/assets/icons/protocols/bancor-bnt-logo.svg';
import MirrorIcon from 'src/assets/icons/protocols/mirror-protocol-mir-logo.svg';
import VechainIcon from 'src/assets/icons/protocols/vechain-vet-logo.svg';
import StellarIcon from 'src/assets/icons/protocols/stellar-xlm-logo.svg';
import BandIcon from 'src/assets/icons/protocols/band-protocol-band-logo.svg';
import OneinchIcon from 'src/assets/icons/protocols/1inch-1inch-logo.svg';
import OmgIcon from 'src/assets/icons/protocols/omg-omg-logo.svg';
import EnjinIcon from 'src/assets/icons/protocols/enjin-coin-enj-logo.svg';
import PolygonIcon from 'src/assets/icons/protocols/polygon-matic-logo.svg';
import ChainlinkIcon from 'src/assets/icons/protocols/chainlink-link-logo.svg';
import YearnIcon from 'src/assets/icons/protocols/yearn-finance-yfi-logo.svg';
import AvalancheIcon from 'src/assets/icons/protocols/avalanche-avax-logo.svg';
import NeoIcon from 'src/assets/icons/protocols/neo-neo-logo.svg';
import TheGraphIcon from 'src/assets/icons/protocols/the-graph-grt-logo.svg';
import TronIcon from 'src/assets/icons/protocols/tron-trx-logo.svg';
import SolanaIcon from 'src/assets/icons/protocols/solana-sol-logo.svg';
import EosIcon from 'src/assets/icons/protocols/eos-eos-logo.svg';
import { Paper } from 'src/common/paper';
import { Button } from 'src/common/button';
import * as styles from './main-protocols.css';

export type MainProtocolsProps = {
  className?: string;
};

const PROTOCOLS = [
  {
    title: 'AAVE',
    icon: AaeveIcon
  },
  {
    title: 'UniSwap',
    icon: UniswapIcon
  },
  {
    title: 'MakerDao',
    icon: MakerdaoIcon
  },
  {
    title: 'Balancer',
    icon: BalancerIcon
  },
  {
    title: 'PancakeSwap',
    icon: CakeIcon
  },
  {
    title: 'PAX',
    icon: PaxIcon
  },
  {
    title: 'SushiSwap',
    icon: SushiIcon
  },
  {
    title: 'Compound',
    icon: CompoundIcon
  },
  {
    title: 'Curve',
    icon: CurveIcon
  },
  {
    title: 'Decentraland',
    icon: DecentralandIcon
  },
  {
    title: 'Filecoin',
    icon: FilecoinIcon
  },
  {
    title: 'Bancor',
    icon: BancorIcon
  },
  {
    title: 'Mirror',
    icon: MirrorIcon
  },
  {
    title: 'VeChain',
    icon: VechainIcon
  },
  {
    title: 'Stellar',
    icon: StellarIcon
  },
  {
    title: 'BAND',
    icon: BandIcon
  },
  {
    title: '1inch',
    icon: OneinchIcon
  },
  {
    title: 'OMG',
    icon: OmgIcon
  },
  {
    title: 'Enjin',
    icon: EnjinIcon
  },
  {
    title: 'Polygon Matic',
    icon: PolygonIcon
  },
  {
    title: 'Chainlink',
    icon: ChainlinkIcon
  },
  {
    title: 'yearn finance',
    icon: YearnIcon
  },
  {
    title: 'Avalanche',
    icon: AvalancheIcon
  },
  {
    title: 'NEO',
    icon: NeoIcon
  },
  {
    title: 'Graph',
    icon: TheGraphIcon
  },
  {
    title: 'TRON',
    icon: TronIcon
  },
  {
    title: 'Solana',
    icon: SolanaIcon
  },
  {
    title: 'EOS',
    icon: EosIcon
  }
];

export const MainProtocols: React.VFC<MainProtocolsProps> = (props) => {
  return (
    <Grid.Container className={clsx(props.className)}>
      <Typography
        variant="h2"
        family="mono"
        transform="uppercase"
        className={styles.title}
      >
        112 protocols Connected
      </Typography>
      <ul className={styles.list}>
        {PROTOCOLS.map((protocol, index) => (
          <li key={String(index)} className={styles.listItem}>
            <Paper className={styles.protocol}>
              <img src={protocol.icon} alt="" className={styles.protocolIcon} />
              <Typography transform="uppercase" variant="h4" family="mono">
                {protocol.title}
              </Typography>
            </Paper>
          </li>
        ))}
        <li className={styles.listItem}>
          <Button
            variant="outlined"
            className={clsx(styles.protocol, styles.protocolButton)}
          >
            +64 more
          </Button>
        </li>
        <li className={styles.listItem}>
          <Button
            variant="outlined"
            color="secondary"
            className={clsx(styles.protocol, styles.protocolButton)}
          >
            +ADD Protocol
          </Button>
        </li>
      </ul>
    </Grid.Container>
  );
};
