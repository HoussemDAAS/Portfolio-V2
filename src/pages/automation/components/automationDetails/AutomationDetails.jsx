import ButtonLink from '@src/components/animationComponents/buttonLink/Index';
/* eslint-disable react/no-array-index-key */
import clsx from 'clsx';
import styles from '@src/pages/automation/components/automationDetails/styles/automationDetails.module.scss';

function AutomationDetails({ automation }) {
  return (
    <div className={styles.root}>
      <h3 className={clsx(styles.title, 'h3')}>{automation.title}</h3>
      <h4 className={clsx(styles.date, 'h4')}>({automation.date})</h4>
      <div className={styles.others}>
        <div className={styles.desc}>
          {automation.desc.map((des, index) => (
            <div className="p-l" key={`${automation.title}-${index}`}>
              {des}
            </div>
          ))}
        </div>
        <div className={styles.buttonContainer}>
          <ButtonLink href="/automation" label="BACK TO AUTOMATION" />
        </div>
      </div>
    </div>
  );
}

export default AutomationDetails;
