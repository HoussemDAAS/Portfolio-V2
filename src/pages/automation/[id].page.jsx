/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useMemo, useRef } from 'react';

import CustomHead from '@src/components/dom/CustomHead';
import NextAutomation from '@src/pages/automation/components/nextAutomation/NextAutomation';
import AutomationDetails from '@src/pages/automation/components/automationDetails/AutomationDetails';
import AutomationImages from '@src/pages/automation/components/automationImages/AutomationImages';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import clsx from 'clsx';
import { gsap } from 'gsap';
import automationProjects from '@src/constants/automationProjects';
import styles from '@src/pages/automation/automation.module.scss';
import useIsMobile from '@src/hooks/useIsMobile';
import { useIsomorphicLayoutEffect } from '@src/hooks/useIsomorphicLayoutEffect';
import { useShallow } from 'zustand/react/shallow';
import { useStore } from '@src/store';
import { useWindowSize } from '@darkroom.engineering/hamo';

function Page({ id }) {
  const isMobile = useIsMobile();
  const rightContainerRef = useRef();
  const leftContainerRef = useRef();
  const [isLoading, setFluidColor] = useStore(useShallow((state) => [state.isLoading, state.setFluidColor]));
  const windowSize = useWindowSize();

  const automationIndex = useMemo(() => automationProjects.findIndex((project) => project.id === id), [id]);
  const currentAutomation = useMemo(() => automationProjects[automationIndex], [automationIndex]);

  const updateCSSVariables = (automation) => {
    gsap.set('html', {
      '--black': automation.primary,
      '--white': automation.secondary,
      '--accentColor': automation.accentColor,
      '--fillColor': automation.fillColor,
      '--menuColor': automation.menuColor,
      '--menuFontColor': automation.menuFontColor,
    });
  };

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!isLoading && !isMobile) {
        ScrollTrigger.create({
          id: 'automation',
          trigger: rightContainerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          pin: leftContainerRef.current,
          scrub: true,
          scroller: document?.querySelector('main'),
          invalidateOnRefresh: true,
          pinSpacing: false,
        });
      }
    });

    return () => {
      ctx.kill();
      ScrollTrigger.getById('automation')?.kill();
    };
  }, [isMobile, isLoading, windowSize.width]);

  useEffect(() => {
    if (currentAutomation) {
      updateCSSVariables(currentAutomation);
      setFluidColor(currentAutomation.fluidColor);
    }
    return () => {
      updateCSSVariables({
        primary: '#1a1a1a',
        secondary: '#fefcfa',
        accentColor: '#ff6b35',
        fillColor: '#ff8c42',
        menuColor: '#ff6b35',
        menuFontColor: '#fefcfa',
      });
      setFluidColor('#ff9966');
    };
  }, [currentAutomation]);

  const seo = useMemo(
    () => ({
      title: `Houssem Daas - ${currentAutomation?.title} Automation`,
      description: `Check out my work on the ${currentAutomation?.title} automation project, featuring ${currentAutomation?.category} with advanced AI and workflow automation techniques.`,
      keywords: [
        `${currentAutomation?.title} automation`,
        `${currentAutomation?.category}`,
        `Houssem Daas automation`,
        `Houssem Daas ${currentAutomation?.title}`,
        'AI automation',
        'n8n workflows',
        'Process automation',
        'Business automation',
        'Intelligent automation',
        'Workflow optimization',
        'Tunisia automation expert',
      ],
    }),
    [currentAutomation],
  );

  return (
    <>
      <CustomHead {...seo} />
      <section className={clsx(styles.root, 'layout-grid-inner')}>
        <div ref={leftContainerRef} className={styles.leftContainer}>
          <AutomationDetails automation={currentAutomation} />
        </div>
        <div ref={rightContainerRef} className={styles.rightContainer}>
          <AutomationImages automation={currentAutomation} />
        </div>
      </section>
      <NextAutomation 
        nextAutomation={
          automationIndex === automationProjects.length - 1 
            ? automationProjects[0] 
            : automationProjects[automationIndex + 1]
        } 
      />
    </>
  );
}

export async function getStaticPaths() {
  const paths = automationProjects.map((project) => ({ params: { id: project.id } }));
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { params } = context;
  return { props: { id: params.id } };
}

export default Page;
