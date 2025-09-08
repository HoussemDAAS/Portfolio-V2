import AppearTitle from '@src/components/animationComponents/appearTitle/Index';
import clsx from 'clsx';
import styles from '@src/pages/about/components/overview/styles/overview.module.scss';
import useIsMobile from '@src/hooks/useIsMobile';

function Overview() {
  const isMobile = useIsMobile();

  return (
    <section className={clsx(styles.root, 'layout-grid-inner')}>
      <div className={styles.title}>
        {isMobile ? (
          <AppearTitle key="mobile-queto">
            <h3 className="h3">A developer&apos;s role is like a smart partner,</h3>
            <h3 className="h3">
              <span className="medium">transforming</span> ideas into
            </h3>
            <h3 className="h3">
              scalable, intelligent systems that help
            </h3>
            <h3 className="h3">
              businesses <span className="medium">grow</span>.
            </h3>
          </AppearTitle>
        ) : (
          <AppearTitle key="desktop-queto">
            <h3 className="h3">A developer&apos;s role is like a smart partner,</h3>
            <h3 className="h3">
              <span className="medium">transforming</span> ideas into scalable,
              intelligent systems
            </h3>
            <h3 className="h3">
              that help businesses <span className="medium">grow</span>.
            </h3>
          </AppearTitle>
        )}
      </div>
      <div className={clsx(styles.text, 'p-l', styles.myStory)}>
        <AppearTitle>
          <span>My Story</span>
        </AppearTitle>
      </div>
      <div className={styles.desc}>
        {!isMobile ? (
          <AppearTitle key="desktop-overview">
            <h6 className="h6">Hey there! I&apos;m Houssem Daas, a full-stack developer and AI automation specialist from Tunisia.</h6>
            <h6 className="h6">I build scalable platforms, web apps, and intelligent systems powered by Next.js, React, Node.js, and n8n automations.</h6>
            <h6 className="h6">My journey has taken me from building startups and client projects to co-founding a marketing & tech agency, where I align technology with business vision.</h6>
            
            <h6 className={clsx(styles.paddingTop, 'h6')}>What excites me most is blending development with AI — creating websites that don’t just look good, but also think, talk, and work like part of your team.</h6>
            
            <h6 className={clsx(styles.paddingTop, 'h6')}>Beyond coding, I&apos;m driven by discipline, growth, and a passion for fitness. The same consistency I apply in the gym fuels the way I approach challenges in tech and business.</h6>
            
            <h6 className={clsx(styles.paddingTop, 'h6')}>I&apos;m always looking forward to collaborating, innovating, and building systems that truly make an impact.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>— Houssem Daas</h6>
          </AppearTitle>
        ) : (
          <AppearTitle key="mobile-overview">
            <h6 className="h6">Hey there! I&apos;m Houssem Daas, a full-stack developer and AI automation specialist from Tunisia.</h6>
            <h6 className="h6">I build scalable platforms, web apps, and intelligent systems powered by Next.js, React, Node.js, and n8n automations.</h6>
            <h6 className="h6">From startups to co-founding a marketing & tech agency, my focus is on aligning technology with business goals.</h6>
            
            <h6 className={clsx(styles.paddingTop, 'h6')}>I love blending development with AI — creating websites that don’t just look good but also think, talk, and work like part of your team.</h6>
            
            <h6 className={clsx(styles.paddingTop, 'h6')}>Outside of coding, I&apos;m passionate about fitness, growth, and discipline — values that shape how I tackle challenges in life and tech.</h6>
            
            <h6 className={clsx(styles.paddingTop, 'h6')}>Excited to collaborate and create impactful systems.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>— Houssem Daas</h6>
          </AppearTitle>
        )}
      </div>
    </section>
  );
}
export default Overview;
