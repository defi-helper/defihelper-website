import { gql } from '@apollo/client';

export const BURGER_SWAP_BRIDGE_TRANSIT = gql`
  mutation AddBurgerSwapBridgeTransit($input: BurgerSwapBridgeTransitInput!) {
    addBurgerSwapBridgeTransit(input: $input) {
      tx
      type
      owner
      createdAt
    }
  }
`;
