import { gql } from 'urql';
import { USER_REFERRER_FRAGMENT } from './user-referrer.fragment.graphql';

export const USER_REFERRER = gql`
  query userReferrer($code: String!) {
    userReferrer(code: $code) {
      ...userReferrerFragment
    }
  }
  ${USER_REFERRER_FRAGMENT}
`;
