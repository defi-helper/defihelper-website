import { gql } from 'urql';

export const MEDIUM_POSTS = gql`
  query LandingMediumPosts {
    landingMediumPosts {
      title
      text
      link
      createdAt
    }
  }
`;
