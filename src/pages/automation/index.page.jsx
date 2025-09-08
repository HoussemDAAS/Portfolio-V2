/* eslint-disable react/jsx-props-no-spreading */
import AutomationHero from '@src/pages/automation/components/hero/AutomationHero';
import AutomationGrid from '@src/pages/automation/components/grid/AutomationGrid';
import CustomHead from '@src/components/dom/CustomHead';

const seo = {
  title: 'Houssem Daas - AI Automation Projects',
  description: 'Explore my AI automation projects built with n8n, advanced AI integrations, and workflow optimization tools that streamline business processes and boost efficiency.',
  keywords: [
    'Houssem Daas',
    'Houssem Daas Automation',
    'AI Automation Projects',
    'n8n Workflows',
    'AI Automation',
    'Business Process Automation',
    'Workflow Optimization',
    'API Integrations',
    'Marketing Automation',
    'Data Processing Automation',
    'Custom Automation Solutions',
    'Intelligent Automation',
    'No-Code Automation',
    'Tunisia Automation Expert',
  ],
};

function Page() {
  return (
    <>
      <CustomHead {...seo} />
      <AutomationHero />
      <AutomationGrid />
    </>
  );
}

export default Page;
