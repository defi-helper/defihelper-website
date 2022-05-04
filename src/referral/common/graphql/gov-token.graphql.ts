import { gql } from 'urql';
import { USER_REFERRER_FRAGMENT } from './user-referrer.fragment.graphql';

export const GOV_TOKEN = gql`
  query ($id: UuidType!) {
    userReferrer(id: $id) {
      ...userReferrerFragment
    }
  }
  ${USER_REFERRER_FRAGMENT}
`;
