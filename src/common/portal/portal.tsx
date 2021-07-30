import React from 'react';
import { createPortal } from 'react-dom';
import { useMount, useUnmount } from 'react-use';

export type PortalProps = {
  container?: Element;
};

export const Portal: React.FC<PortalProps> = (props) => {
  const { children, container } = props;
  const [mountNode, setMountNode] =
    React.useState<HTMLElement | Element | null>(null);

  useMount(() => {
    setMountNode(container || document.body);
  });

  useUnmount(() => {
    setMountNode(null);
  });

  if (!mountNode) return mountNode;

  return createPortal(children, mountNode);
};
