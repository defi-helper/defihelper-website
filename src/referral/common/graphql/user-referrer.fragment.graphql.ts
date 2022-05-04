import { gql } from 'urql';

export const USER_REFERRER_FRAGMENT = gql`
  fragment userReferrerFragment on UserReferrerCodeType {
    code
    redirectTo
    id
  }
`;
