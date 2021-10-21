import React from 'react';
import ReactMarkdown from 'react-markdown';

import { ReactComponent as ExpandIcon } from 'src/assets/icons/plus.svg';
import { Accordion } from '../accordion';
import { MarkdownLink } from '../markdown-link';
import { MarkdownList, MarkdownListItem } from '../markdown-list';
import { MarkdownParagraph } from '../markdown-paragraph';
import { Typography } from '../typography';
import * as styles from './faq.css';

export type BagFaqProps = {
  className?: string;
  children: {
    title: string;
    body: string;
  }[];
};

const renderers = {
  paragraph: MarkdownParagraph,
  link: MarkdownLink,
  list: MarkdownList,
  listItem: MarkdownListItem
};

export const Faq: React.VFC<BagFaqProps> = (props) => {
  return (
    <>
      {props.children.map((faqItem) => (
        <Accordion key={faqItem.title}>
          <Accordion.Summary expandIcon={<ExpandIcon width="16" height="16" />}>
            <Typography>{faqItem.title}</Typography>
          </Accordion.Summary>
          <Accordion.Details className={styles.detail}>
            <ReactMarkdown renderers={renderers}>{faqItem.body}</ReactMarkdown>
          </Accordion.Details>
        </Accordion>
      ))}
    </>
  );
};
