import AppearTitle from '@src/components/animationComponents/appearTitle/Index';
import ButtonLink from '@src/components/animationComponents/buttonLink/Index';
import Image from 'next/image';
import clsx from 'clsx';
import { gsap } from 'gsap';
import styles from '@src/pages/components/about/styles/about.module.scss';
import useIsMobile from '@src/hooks/useIsMobile';
import { useIsomorphicLayoutEffect } from '@src/hooks/useIsomorphicLayoutEffect';
import { useRef } from 'react';

function About() {
  const isMobile = useIsMobile();
  const rootRef = useRef();
  const animatedImageRef = useRef();

  const setupScrollAnimation = () => {
    const ctx = gsap.context(() => {
      gsap.set(animatedImageRef.current, { top: !isMobile ? '-20vw' : '0' });
      if (!isMobile) {
        gsap.to(animatedImageRef.current, {
          top: '20vw',
          ease: 'none',
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
            scroller: document?.querySelector('main'),
            invalidateOnRefresh: true,
          },
        });
      }
    });

    return ctx;
  };

  useIsomorphicLayoutEffect(() => {
    const ctx = setupScrollAnimation();
    return () => ctx.kill();
  }, [isMobile]);

  const renderImageContainer = () => (
    <div className={styles.imageContainer}>
      <Image 
        priority 
        src="/daas/front.jpg" 
        sizes="(max-width: 768px) 60vw, 30vw" 
        fill 
        alt="Daas Houssem"
        style={{
          objectFit: 'contain',
          objectPosition: 'center'
        }}
      />
    </div>
  );

  return (
    <section ref={rootRef} className={styles.root}>
      <div className={clsx(styles.nameContainer, 'layout-block-inner')}>
        <AppearTitle>
          <h1 className={clsx('h1', 'medium')}>Hey, My name&apos;s</h1>
          <h1 className={clsx('h1', 'medium')}>Daas Houssem!</h1>
        </AppearTitle>
      </div>

      <div className={clsx(styles.container, 'layout-grid-inner')}>
        {isMobile ? renderImageContainer() : null}
        <div className={clsx(styles.descWrapper)} ref={animatedImageRef}>
          <AppearTitle>
       <div className="p-l">“My journey as a full-stack developer and</div>
<div className="p-l">AI automation specialist allows me to solve</div>
<div className="p-l">challenges creatively and efficiently, while</div>
<div className="p-l">driving the success of your project goals.”</div>

          </AppearTitle>
        </div>
        {!isMobile ? renderImageContainer() : null}
        <div className={clsx(styles.descWrapperBottom)}>
  {!isMobile ? (
    <AppearTitle key="desktop-descWrapperBottom">
      <h6 className="h6">A dedicated full-stack developer and AI</h6>
      <h6 className="h6">automation specialist based in Tunisia.</h6>
      <h6 className="h6">With a passion for innovation and a focus on</h6>
      <h6 className="h6">building scalable, intelligent systems, I create</h6>
      <h6 className="h6">digital solutions that think and grow with your business.</h6>
    </AppearTitle>
  ) : (
    <AppearTitle key="mobile-descWrapperBottom">
      <h6 className="h6">A dedicated full-stack developer and AI automation</h6>
      <h6 className="h6">specialist based in Tunisia. With a passion for innovation</h6>
      <h6 className="h6">and a focus on building scalable, intelligent systems,</h6>
      <h6 className="h6">I create digital solutions that think and grow with your business.</h6>
    </AppearTitle>
  )}
  <div className={clsx(styles.buttonContainer)}>
    <ButtonLink href="/about" label="ABOUT ME" />
    <ButtonLink href="/education" label="EDUCATION & EXPERIENCE" />
  </div>
</div>

      </div>
    </section>
  );
}

export default About;
