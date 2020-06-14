import React from 'react';
import TemplateWrapper from '~/components/TemplateWrapper';
import { Hero } from '~/components/Resources/Hero';
import { Footer } from '~/components/Footer';
import { CodeOfConduct } from '~/components/CodeOfConduct/CodeOfConduct';


const COCPage: React.FC = () => 
  <TemplateWrapper>
    <Hero />
      <CodeOfConduct />
    <Footer />
  </TemplateWrapper>

export default COCPage;
