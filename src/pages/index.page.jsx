/* eslint-disable react/jsx-props-no-spreading */
import Home from '@src/pages/components/home/Index';
import About from '@src/pages/components/about/Index';
import Quote from '@src/pages/components/quote/Index';
import Projects from '@src/pages/components/projects/Index';
import Clients from '@src/pages/components/clients/Index';
import CustomHead from '@src/components/dom/CustomHead';

const seo = {
  title: 'Houssem Daas - Full-Stack Developer & AI Automation Specialist',
  description:
    'Full-stack developer and AI automation specialist from Tunisia, crafting intelligent web applications and automation solutions. Combining creativity and technical expertise to deliver innovative user-centric solutions.',
  keywords: [
    'Houssem Daas',
    'Full-Stack Developer',
    'AI Automation Specialist',
    'Portfolio',
    'Web Development',
    'React Developer',
    'Developer',
    'Web Applications',
    'Responsive Design',
    'Progressive Web Apps',
    'Freelance Developer',
    'Modern Web Development',
    'Cross-platform Development',
    'Tunisia',
    'JavaScript',
    'TypeScript',
    'Next.js',
    'React',
    'Node.js',
    'AI Automation',
    'n8n Workflows',
    'Process Automation',
    'HTML',
    'CSS',
  ],
};

function Page() {
  return (
    <>
      {/* <CustomHead {...seo} /> */}
      {/* <Home /> */}
       <About /> 
      <Clients />
      <Quote />
      <Projects />
    </>
  );
}

export default Page;
