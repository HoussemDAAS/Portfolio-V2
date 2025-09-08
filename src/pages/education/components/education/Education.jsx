import AppearTitle from '@src/components/animationComponents/appearTitle/Index';
import clsx from 'clsx';
import styles from '@src/pages/education/components/education/styles/education.module.scss';
import useIsMobile from '@src/hooks/useIsMobile';

const educationData = [
  {
    period: '2024 – Present',
    location: 'Tunis, Tunisia',
    title: "Master's in Computer Software Engineering",
    institution: 'Virtual University of Tunis (UVT)',
    description: 'Advanced studies in software architecture, AI systems, and cutting-edge development methodologies.'
  },
  {
    period: '2021 – 2024',
    location: 'Nabeul, Tunisia',
    title: "Bachelor's in Information Systems Development",
    institution: 'Higher Institute of Technological Studies of Nabeul',
    description: 'Comprehensive foundation in software development, database systems, and web technologies.'
  }
];

function Education() {
  const isMobile = useIsMobile();

  return (
    <section id="education" className={clsx(styles.root, 'layout-grid-inner')}>
      <div className={styles.title}>
        <AppearTitle>
          <h2 className="h2">Education</h2>
        </AppearTitle>
      </div>
      
      <div className={clsx(styles.text, 'p-l', styles.sectionLabel)}>
        <AppearTitle>
          <span>Academic Journey</span>
        </AppearTitle>
      </div>
      
      <div className={styles.desc}>
        <AppearTitle>
          <h6 className="h6">Building a strong foundation in computer science and software engineering through rigorous academic pursuit and continuous learning.</h6>
        </AppearTitle>
        
        <div className={styles.timelineContainer}>
          {educationData.map((item, index) => (
            <div key={index} className={clsx(styles.timelineItem, {
              [styles.latest]: index === 0
            })}>
              <div className={styles.period}>
                <span className={clsx(styles.periodText, 'p-s')}>{item.period}</span>
                <span className={clsx(styles.location, 'p-s')}>{item.location}</span>
              </div>
              
              <h4 className={clsx(styles.itemTitle, 'h4')}>{item.title}</h4>
              <h5 className={clsx(styles.institution, 'h5')}>{item.institution}</h5>
              <h6 className={clsx(styles.itemDescription, 'h6', styles.paddingTop)}>{item.description}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
