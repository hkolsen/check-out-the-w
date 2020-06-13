import React from 'react';
import TemplateWrapper from '~/components/TemplateWrapper';
import { Footer } from '~/components/Footer';
import { CodeOfConduct } from '~/components/CodeOfConduct/CodeOfConduct';


const COCPage: React.FC = () => 
  <TemplateWrapper>
      <CodeOfConduct />
      <Footer />
    </TemplateWrapper>

export default COCPage;
