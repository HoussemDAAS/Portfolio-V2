import AppearTitle from '@src/components/animationComponents/appearTitle/Index';
import clsx from 'clsx';
import styles from '@src/pages/education/components/experience/styles/experience.module.scss';
import useIsMobile from '@src/hooks/useIsMobile';

const experienceData = [
  {
    period: '06/2025 – Present',
    location: 'Tunis, Tunisia',
    position: 'Co-Founder (CDTO)',
    company: 'Benders CORP',
    highlights: [
      'Co-founded a marketing agency blending media buying, design, and AI-driven technology solutions.',
      'Designed and developed AI-powered websites, web platforms, and mobile apps using Next.js, React, Node.js, and modern AI integrations.',
      'Built and launched a custom E-Learning platform with AI-driven personalized learning experiences and scalable content delivery.',
      'Led the agency\'s technical roadmap, ensuring innovation, scalability, and high performance across all projects.',
      'Architected automation workflows using n8n and AI to streamline client outreach, data handling, and marketing processes.',
      'Aligned product development with client objectives, establishing Benders as a cutting-edge agency in both tech and marketing.'
    ]
  },
  {
    period: '06/2024 – 07/2025',
    location: 'Bizerte, Tunisia',
    position: 'Founder',
    company: 'Navix Agency',
    highlights: [
      'Founded a web agency delivering modern, scalable, AI-powered platforms.',
      'Designed and developed multiple Next.js and MERN stack websites, including Navix, commercial platforms, and creative portfolios.',
      'Integrated automation, analytics, SEO, and marketing tracking systems to optimize performance.',
      'Managed end-to-end client projects while applying founder-level leadership and business strategy skills.'
    ]
  },
  {
    period: '07/2024 – 07/2025',
    location: 'Bizerte, Tunisia',
    position: 'IT Support Specialist',
    company: 'Tunelec',
    highlights: [
      'Automated microcontroller programming for MICROCHIP and STM32, cutting manual effort by 40% and errors by 25%.',
      'Built a Next.js app for board testing and QA, speeding validation by 30%.',
      'Developed a GRQC tracking platform, improving defect detection by 20%.',
      'Maintained network and server infrastructure, reducing downtime by 15%.'
    ]
  },
  {
    period: '02/2024 – 06/2024',
    location: 'Bizerte, Tunisia',
    position: 'Mobile Developer',
    company: 'SOTULUB',
    highlights: [
      'Developed a Flutter + Firebase app for used oil collection, cutting collection time by 20%.',
      'Integrated maps, routing, and geo-location management to improve navigation and user satisfaction.',
      'Built a secure admin panel, enhancing data security and reducing management time by 10%.'
    ]
  },
  {
    period: '02/2023 – 03/2023',
    location: 'Tunis, Tunisia',
    position: 'Web Developer',
    company: 'Optima Soft',
    highlights: [
      'Designed a responsive admin dashboard using Angular, jQuery & SQL.',
      'Improved page load speed by 69% via script/style optimization.'
    ]
  }
];

function Experience() {
  const isMobile = useIsMobile();

  return (
    <section id="experience" className={clsx(styles.root, 'layout-grid-inner')}>
      <div className={styles.title}>
        <AppearTitle>
          <h2 className="h2">Experience</h2>
        </AppearTitle>
      </div>
      
      <div className={clsx(styles.text, 'p-l', styles.sectionLabel)}>
        <AppearTitle>
          <span>Professional Journey</span>
        </AppearTitle>
      </div>
      
      <div className={styles.desc}>
        <AppearTitle>
          <h6 className="h6">Transforming innovative ideas into impactful solutions through leadership, technical expertise, and strategic vision across diverse technology environments.</h6>
        </AppearTitle>
        
        <div className={styles.timelineContainer}>
          {experienceData.map((item, index) => (
            <div key={index} className={clsx(styles.timelineItem, {
              [styles.current]: index === 0
            })}>
              <div className={styles.period}>
                <span className={clsx(styles.periodText, 'p-s')}>{item.period}</span>
                <span className={clsx(styles.location, 'p-s')}>{item.location}</span>
              </div>
              
              <h4 className={clsx(styles.position, 'h4')}>{item.position}</h4>
              <h5 className={clsx(styles.company, 'h5')}>{item.company}</h5>
              
              <div className={clsx(styles.paddingTop, styles.highlights)}>
                {item.highlights.map((highlight, hIndex) => (
                  <h6 key={hIndex} className={clsx(styles.highlight, 'h6', styles.paddingTop)}>
                    • {highlight}
                  </h6>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
