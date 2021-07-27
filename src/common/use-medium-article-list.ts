import { config } from 'src/config';
import { useLazyQuery } from './use-query';

const QUERY = `
  query {
    mediumPostList {
      guid
      title
      pubDate
      link
    }
  }
`;

export type Article = {
  guid: string;
  title: string;
  pubDate: string;
  link: string;
};

export type ArticlePayload = {
  data: {
    mediumPostList: Article[];
  };
};

export const useMediumArticleList = () =>
  useLazyQuery<ArticlePayload>(config.API_URL ?? '', {
    query: QUERY
  });
