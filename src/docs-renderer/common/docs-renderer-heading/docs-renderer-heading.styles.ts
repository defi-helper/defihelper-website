import { createUseStyles } from 'react-jss';

export const useDocsRendererHeadingStyles = createUseStyles(
  {
    root: {
      '&:first-child': {
        paddingTop: 0
      }
    },

    2: {
      padding: '160px 0 24px'
    },

    3: {
      padding: '63px 0 24px'
    }
  },
  {
    name: 'DocsRendererHeading'
  }
);
