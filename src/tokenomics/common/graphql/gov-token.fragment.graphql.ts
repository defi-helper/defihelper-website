import { gql } from 'urql';

export const GOV_TOKEN_FRAGMENT = gql`
  fragment govTokenFragment on GovTokenCirculationValueType {
    timeLeft
    timeTotal
    tokenLeft
    tokenTotal
  }
`;
