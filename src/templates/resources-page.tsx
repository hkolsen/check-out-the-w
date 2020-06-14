import React from 'react';
import TemplateWrapper from '~/components/TemplateWrapper';
import { Hero } from '~/components/Resources/Hero';
import { Footer } from '~/components/Footer';
import { Resources } from '~/components/Resources/Resources';
import { ResourceForm } from '~/components/Resources/ResourceForm';


const ResourcesPage: React.FC = () => 
    <TemplateWrapper>
      <Hero />
      <Resources />
      <ResourceForm />
      <Footer />
    </TemplateWrapper>

export default ResourcesPage;
