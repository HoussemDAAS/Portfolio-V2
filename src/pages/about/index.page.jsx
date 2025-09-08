/* eslint-disable react/jsx-props-no-spreading */
import Hero from '@src/pages/about/components/hero/Hero';
import Overview from '@src/pages/about/components/overview/Overview';
import Services from '@src/pages/about/components/services/Services';
import Process from '@src/pages/about/components/process/Process';
import CustomHead from '@src/components/dom/CustomHead';

const seo = {
  title: 'Houssem Daas - About',
  description: 'Learn about my journey as a full-stack developer and AI automation specialist, my values, and commitment to delivering innovative web and automation solutions.',
  keywords: [
    'Houssem Daas',
    'About Houssem Daas',
    'About me',
    'Full-Stack Developer Journey',
    'AI Automation Specialist',
    'Web Developer Story',
    'Professional Web Development',
    'Full-Stack Development Expertise',
    'AI Automation Skills',
    'Web Design Skills',
    'Web Development Services',
    'Automation Solutions',
    'Developer Profile',
    'Quality Web Solutions',
    'Tunisia Developer',
  ],
};
function Page() {
  return (
    <>
      <CustomHead {...seo} />

      <Hero />
      <Overview />
      <Services />
      <Process />
    </>
  );
}

export default Page;
