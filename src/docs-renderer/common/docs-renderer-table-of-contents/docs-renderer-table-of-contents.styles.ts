import { createUseStyles } from 'react-jss';

export const useDocsRendererTableOfContentsStyles = createUseStyles(
  () => ({
    root: {
      padding: 0,
      margin: 0,
      listStyle: 'none',
      overflowY: 'auto',
      overflowX: 'hidden',
      maxHeight: '100%'
    },

    subList: {
      display: 'none'
    },

    subListActive: {
      display: 'block'
    },

    item: {
      '& $link': {
        opacity: 0.4
      },

      '&:not(:last-child)': {
        marginBottom: 16
      },

      '& ul': {
        paddingTop: 16,
        paddingLeft: 16
      }
    },

    active: {
      '& > $link': {
        opacity: 1
      }
    },

    link: {
      justifyContent: 'flex-start',
      textAlign: 'left',
      wordBreak: 'break-word'
    },

    arrow: {
      position: 'absolute',
      left: 0,
      display: 'none'
    },

    mobileToolbar: {
      position: 'fixed',
      zIndex: 1,
      bottom: 0,
      left: 0,
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: '10px 15px 10px 12px'
    },

    mobileToolbarIcon: {
      marginRight: 20
    },

    mobileMenu: {
      maxHeight: '100%',
      height: 'auto'
    }
  }),
  {
    name: 'DocsRendererTableOfContents'
  }
);
