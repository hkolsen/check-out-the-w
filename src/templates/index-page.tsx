import React from 'react';
import TemplateWrapper from '~/components/TemplateWrapper';
import { Hero } from '~/components/Home/Hero';
import { Footer } from '~/components/Footer';
import { Discord } from '~/components/Home/Discord';
import { About } from '~/components/Home/About';

const IndexPage: React.FC = () => 
    <TemplateWrapper>
      <Hero />
      <About />
      <Discord />
      <Footer />
    </TemplateWrapper>

export default IndexPage;
