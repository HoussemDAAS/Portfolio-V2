import AppearByWords from '@src/components/animationComponents/appearByWords/Index';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import styles from '@src/pages/automation/components/nextAutomation/styles/nextAutomation.module.scss';

function NextAutomation({ nextAutomation }) {
  return (
    <>
      <section className={clsx(styles.titleContainer, 'layout-block-inner')}>
        <h1 className={clsx(styles.title, 'h1')}>
          <AppearByWords>Next Automation</AppearByWords>
        </h1>
      </section>
      <section className={clsx(styles.nextRoot, 'layout-block-inner')}>
        <div className={styles.innerContainer}>
          <Link 
            aria-label={`Go ${nextAutomation.title}`} 
            id={nextAutomation.id} 
            scroll={false} 
            href={`/automation/${nextAutomation.id}`} 
            className={clsx(styles.card)}
          >
            <div className={styles.projectsWrap}>
              <div className={clsx(styles.container, 'layout-grid-inner')}>
                <div className={styles.projectsDetails}>
                  <h6 className={clsx(styles.text, 'h6')}>{nextAutomation.category}</h6>
                  <h3 className={clsx(styles.text, 'h3')}>{nextAutomation.title}</h3>
                  <div className={styles.complexity}>
                    <span className={clsx(styles.complexityBadge, styles[nextAutomation.complexity.toLowerCase()])}>
                      {nextAutomation.complexity}
                    </span>
                  </div>
                </div>
                <div className={styles.imageContainer}>
                  <Image priority sizes="100%" src={nextAutomation.img} fill alt={nextAutomation.title} />
                </div>
              </div>
            </div>

            <div className={styles.canvas}>
              <Image priority sizes="100%" src={nextAutomation.img} fill alt={nextAutomation.title} />
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}

export default NextAutomation;
