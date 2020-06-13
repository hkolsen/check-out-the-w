import React from 'react';
import TemplateWrapper from '~/components/TemplateWrapper';
import { Hero } from '~/components/Home/Hero';
import { About } from '~/components/Home/About';
import { Programming } from '~/components/Home/Programming';
import { Footer } from '~/components/Footer';

const IndexPage: React.FC = () => 
    <TemplateWrapper>
      <Hero />
      <About />
      <Programming />
      <Footer />
    </TemplateWrapper>

export default IndexPage;
