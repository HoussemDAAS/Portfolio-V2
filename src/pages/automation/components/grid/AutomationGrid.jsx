/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-nested-ternary */

import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { gsap } from 'gsap';
import automationProjects from '@src/constants/automationProjects';
import styles from '@src/pages/automation/components/grid/styles/automationGrid.module.scss';
import useIsMobile from '@src/hooks/useIsMobile';
import { useIsomorphicLayoutEffect } from '@src/hooks/useIsomorphicLayoutEffect';
import { useRef } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { useStore } from '@src/store';
import { useWindowSize } from '@darkroom.engineering/hamo';

function AutomationGrid() {
  const isMobile = useIsMobile();
  const windowSize = useWindowSize();
  const rootRef = useRef();
  const projectRefs = useRef([]);
  const [isLoading] = useStore(useShallow((state) => [state.isLoading]));

  const setupProjectAnimations = () => {
    const ctx = gsap.context(() => {
      if (!isLoading) {
        projectRefs.current.slice(0, -1).forEach((projectRef, index) => {
          gsap.set(projectRef, { yPercent: 0 });
          gsap
            .timeline({
              scrollTrigger: {
                id: `automationRef-${index}`,
                trigger: rootRef.current,
                start: `top+=${windowSize.height * index}`,
                end: () => `+=${(projectRefs.current.length - 2) * windowSize.height}`,
                scrub: true,
                scroller: document?.querySelector('main'),
                invalidateOnRefresh: true,
              },
            })
            .to(projectRef, {
              yPercent: 100,
              stagger: 1,
            });
        });
      }
    });

    return ctx;
  };

  useIsomorphicLayoutEffect(() => {
    const ctx = setupProjectAnimations();
    return () => ctx.kill();
  }, [isLoading, windowSize.height]);

  return (
    <>
      <section className={clsx(styles.titleContainer, 'layout-block-inner')}>
        <h1 className={clsx(styles.title, 'h1')}>Automation Projects</h1>
      </section>
      <section ref={rootRef} className={clsx(styles.root, 'layout-block-inner')}>
        <div className={styles.innerContainer}>
          {automationProjects.map((project, index) => (
            <Link key={project.id} href={`/automation/${project.id}`} className={clsx(styles.card)}>
              <div
                style={
                  !isMobile
                    ? {
                        height: index === automationProjects.length - 1 ? '200svh' : `${200 + 100 * index}svh`,
                        top: index === 0 ? '0px' : '-100svh',
                      }
                    : {
                        height: index === automationProjects.length - 1 ? '100svh' : `${200 + 100 * index}svh`,
                        top: index === 0 ? '0px' : '-50svh',
                      }
                }
                className={styles.projectsWrap}
              >
                <div className={clsx(styles.container, 'layout-grid-inner')}>
                  <div className={styles.projectsDetails}>
                    <h6 className={clsx(styles.category, 'h6')}>{project.category}</h6>
                    <h3 className={clsx(styles.text, 'h3')}>{project.title}</h3>
                    <p className={clsx(styles.description, 'p-m')}>{project.description}</p>
                    <div className={styles.tools}>
                      {project.tools.map((tool) => (
                        <span key={tool} className={clsx(styles.tool, 'p-s')}>{tool}</span>
                      ))}
                    </div>
                    <div className={styles.results}>
                      <h6 className={clsx(styles.resultsLabel, 'h6')}>Results:</h6>
                      <p className={clsx(styles.resultsText, 'p-s')}>{project.results}</p>
                    </div>
                    <div className={styles.complexity}>
                      <span className={clsx(styles.complexityBadge, styles[project.complexity.toLowerCase()], 'p-x')}>
                        {project.complexity}
                      </span>
                    </div>
                  </div>
                  <div className={styles.imageContainer}>
                    <Image priority={index === 0} sizes="100%" src={project.img} fill alt={project.title} />
                  </div>
                </div>
              </div>
              <div
                ref={(el) => {
                  projectRefs.current[index] = el;
                }}
                className={styles.canvas}
              >
                <Image
                  priority={index === 0}
                  sizes="100%"
                  className={index === 0 ? styles.firstCard : index === automationProjects.length - 1 ? styles.lastCard : undefined}
                  src={project.img}
                  fill
                  alt={project.title}
                />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default AutomationGrid;
