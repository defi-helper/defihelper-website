export type TableOfContent = {
  id: string;
  text: string | null;
  external?: boolean;
  childNodes?: TableOfContent[];
  element?: Element;
  index?: number;
  rootId?: string;
  parentMap?: string[] | undefined;
};

type IntermediateTableOfContent = {
  childNodes: IntermediateTableOfContent[];
  element: Element;
  index: number;
  rootId: string;
  parentMap?: string[];
};

const getParentMap = (
  [, headingLevel]: string,
  latestRoots: Record<string, string>
) => {
  return Object.values(latestRoots).slice(0, Number(headingLevel) - 2);
};

const getDefaultRoot = (
  heading: Element,
  index: number,
  latestRoots: Record<string, string>
): IntermediateTableOfContent => ({
  rootId: latestRoots[heading.tagName],
  element: heading,
  childNodes: [],
  index
});

const getFlatNodeListFromHeadings = (headings: Element[]) => {
  const latestRoots: Record<string, string> = {};
  const roots: Record<string, Record<string, IntermediateTableOfContent>> = {
    H2: {},
    H3: {},
    H4: {},
    H5: {},
    H6: {}
  };

  headings.forEach((heading, index) => {
    latestRoots[heading.tagName] = String(index);

    if (heading.tagName === 'H2') {
      roots.H2[latestRoots.H2] = getDefaultRoot(heading, index, latestRoots);
      return;
    }
    roots[heading.tagName][latestRoots[heading.tagName]] = {
      ...getDefaultRoot(heading, index, latestRoots),
      parentMap: getParentMap(heading.tagName, latestRoots)
    };
  });

  return roots;
};

const transformRootNode = (node: IntermediateTableOfContent) => ({
  ...node,
  id: node.element.id,
  text: node.element.textContent
});

const getNodeTreeFromFlatNodeList = (
  roots: Record<string, Record<string, IntermediateTableOfContent>>
): TableOfContent[] => {
  const rootValues = Object.values(roots);

  rootValues.forEach((currentRoot, index) => {
    const parents = rootValues[index - 1];

    if (currentRoot) {
      Object.keys(currentRoot).forEach((childKey) => {
        const child = transformRootNode(currentRoot[childKey]);

        if (child.parentMap) {
          const parentId = child.parentMap[child.parentMap.length - 1];
          const parent = parents[parentId];

          parent.childNodes.push(child);
        }
      });
    }
  });

  const finalRoots = Object.values(roots.H2).map((h2Value) =>
    transformRootNode(h2Value)
  );
  return finalRoots as TableOfContent[];
};

export const buildTableOfContents = (
  headingElements: Element[]
): TableOfContent[] => {
  const roots = getFlatNodeListFromHeadings(headingElements);

  return getNodeTreeFromFlatNodeList(roots);
};
