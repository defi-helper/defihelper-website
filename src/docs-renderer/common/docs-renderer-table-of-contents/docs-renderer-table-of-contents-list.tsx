import clsx from 'clsx';
import React, { useCallback, useMemo } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { useMedia, useToggle } from 'react-use';

import { URLS } from 'src/router/urls';
import { Link, Typography, ButtonBase, Modal, SmallModal } from 'src/common';
import { ReactComponent as MenuIcon } from 'src/assets/icons/whitepaper-menu.svg';
import { useDocsRendererTableOfContentsStyles } from './docs-renderer-table-of-contents.styles';
import { TableOfContent } from '../build-table-of-contents';

export type DocsRendererTableOfContentsListProps = {
  className?: string;
  tableOfContent: TableOfContent[];
  activeElement?: string;
};

const List: React.VFC<DocsRendererTableOfContentsListProps> = (props) => {
  const classes = useDocsRendererTableOfContentsStyles();

  const sublistHasActiveId = useCallback(
    (sublist: TableOfContent[] | TableOfContent): boolean => {
      if (!Array.isArray(sublist)) {
        return sublist.id === props.activeElement;
      }

      return sublist.some(sublistHasActiveId);
    },
    [props.activeElement]
  );

  return (
    <ul className={clsx(classes.root, props.className)}>
      {props.tableOfContent.map((list) => {
        return (
          <li
            className={clsx(
              classes.item,
              list.id === props.activeElement && classes.active
            )}
            key={list.id}
          >
            <Link
              href={!list.external ? `#${list.id}` : undefined}
              to={
                list.external && list.text
                  ? URLS.docs.detail(list.text)
                  : undefined
              }
              as={list.external ? ReactRouterLink : undefined}
              className={classes.link}
            >
              {list.id === props.activeElement && (
                <span className={classes.arrow}>→</span>
              )}{' '}
              {list.text}
            </Link>
            {!!list.childNodes?.length && (
              <List
                activeElement={props.activeElement}
                tableOfContent={list.childNodes}
                className={clsx(classes.subList, {
                  [classes.subListActive]:
                    list.id === props.activeElement ||
                    sublistHasActiveId(list.childNodes)
                })}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
};

const deepFlat = (tableOfContent: TableOfContent[]) =>
  tableOfContent.reduce<TableOfContent[]>((acc, tableOfContentItem) => {
    acc.push(tableOfContentItem);

    if (tableOfContentItem.childNodes?.length) {
      acc.push(...deepFlat(tableOfContentItem.childNodes));
    }

    return acc;
  }, []);

const IS_DESKTOP = '(min-width: 960px)';

const ModalTableOfContents: React.FC<DocsRendererTableOfContentsListProps> = (
  props
) => {
  const classes = useDocsRendererTableOfContentsStyles();
  const [menuIsOpen, toggleMenu] = useToggle(false);

  const tableOfContent = useMemo(
    () => deepFlat(props.tableOfContent),
    [props.tableOfContent]
  );

  const activeTitle = useMemo(
    () =>
      tableOfContent.find(
        (tableOfContentItem) => tableOfContentItem.id === props.activeElement
      )?.text,
    [tableOfContent, props.activeElement]
  );

  return (
    <>
      {!menuIsOpen && (
        <ButtonBase className={classes.mobileToolbar} onClick={toggleMenu}>
          <MenuIcon className={classes.mobileToolbarIcon} />
          <Typography variant="body2">{activeTitle}</Typography>
        </ButtonBase>
      )}
      <Modal
        open={menuIsOpen}
        onClose={toggleMenu}
        className={classes.mobileMenu}
      >
        <SmallModal withoutOnclose>
          <List {...props} />
        </SmallModal>
      </Modal>
    </>
  );
};

export const DocsRendererTableOfContentsList: React.VFC<DocsRendererTableOfContentsListProps> =
  (props) => {
    const isDesktop = useMedia(IS_DESKTOP);

    return (
      <div>
        {isDesktop ? <List {...props} /> : <ModalTableOfContents {...props} />}
      </div>
    );
  };
