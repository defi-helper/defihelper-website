import { useState, useEffect, useCallback, useRef } from 'react';
import { useMountedState } from 'react-use';

export const useScrollSpy = ({
  activeSectionDefault = '',
  offsetPx = 0,
  sectionElements,
  routerParams
}: {
  activeSectionDefault?: string;
  offsetPx?: number;
  sectionElements: string;
  routerParams?: unknown;
}) => {
  const [activeSection, setActiveSection] = useState(activeSectionDefault);
  const sectionElementsRef = useRef<Element[]>([]);

  const mounted = useMountedState();

  const handle = useCallback(() => {
    let currentSectionId = activeSection;

    sectionElementsRef.current.forEach((section) => {
      if (!section || !(section instanceof Element)) return;

      if (section.getBoundingClientRect().top - offsetPx < 0) {
        currentSectionId = section.id;
      }
    });

    setActiveSection(currentSectionId);
  }, [activeSection, offsetPx]);

  useEffect(() => {
    if (mounted()) {
      sectionElementsRef.current = [
        ...document.querySelectorAll(sectionElements)
      ];
    }

    handle();

    window.addEventListener('scroll', handle);

    return () => window.removeEventListener('scroll', handle);
  }, [
    activeSection,
    offsetPx,
    handle,
    sectionElements,
    mounted,
    activeSectionDefault
  ]);

  useEffect(() => {
    setActiveSection(activeSectionDefault);
  }, [routerParams, activeSectionDefault]);

  return activeSection;
};
