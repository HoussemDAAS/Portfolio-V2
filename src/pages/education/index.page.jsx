/* eslint-disable react/jsx-props-no-spreading */
import Hero from '@src/pages/education/components/hero/Hero';
import Education from '@src/pages/education/components/education/Education';
import Experience from '@src/pages/education/components/experience/Experience';
import CustomHead from '@src/components/dom/CustomHead';

const seo = {
  title: 'Houssem Daas - Education & Experience',
  description: 'Explore my educational background in software engineering and professional experience in web development, AI automation, and technology innovation.',
  keywords: [
    'Houssem Daas',
    'Houssem Daas Education',
    'Software Engineering',
    'Computer Science Education',
    'Professional Experience',
    'Web Development Experience',
    'Full-Stack Developer Career',
    'AI Automation Experience',
    'Technology Innovation',
    'Full Stack Development',
    'Virtual University of Tunis',
    'Higher Institute of Technological Studies',
    'Benders Agency',
    'Navix Agency',
    'Tunisia Education',
  ],
};

function Page() {
  return (
    <>
      <CustomHead {...seo} />
      <Hero />
      <Education />
      <Experience />
    </>
  );
}

export default Page;
