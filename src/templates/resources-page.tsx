import React from 'react';
import TemplateWrapper from '~/components/TemplateWrapper';
import { Hero } from '~/components/Resources/Hero';
import { Footer } from '~/components/Footer';
import { Resources } from '~/components/Resources/Resources';


const ResourcesPage: React.FC = () => 
    <TemplateWrapper>
      <Hero />
      <Resources />
      <Footer />
    </TemplateWrapper>

export default ResourcesPage;
