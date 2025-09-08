import FruitNinja from '@src/components/dom/prefooter/Index';
import clsx from 'clsx';
import styles from '@src/components/dom/styles/preFooter.module.scss';

function PreFooter() {
  return (
    <section className={clsx(styles.root, 'layout-block-inner')}>
      <div className={styles.textsContainer}>
        <div>
          <h2 className="h1">Let's build</h2>
          <h2 className="h1">your next  project</h2>
          <h2 className="h1">together!</h2>
        </div>
        <div>
          <h6 className="h6">
 Ready to create experiences that stand out? Let’s get started.
          </h6>
        </div>
      </div>

      <div className={styles.canvas}>
        <FruitNinja />
      </div>
    </section>
  );
}

export default PreFooter;
