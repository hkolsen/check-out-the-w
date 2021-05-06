import React from 'react';
import TemplateWrapper from '~/components/TemplateWrapper';
import { Hero } from '~/components/Home/Hero';
import { Footer } from '~/components/Footer';
import { EventLocation } from '~/components/Events/EventLocation';
import { About } from '~/components/Events/About';

const EventPage: React.FC = () => 
    <TemplateWrapper>
      <Hero>
        <EventLocation />
      </Hero>
      <About />
      <Footer />
    </TemplateWrapper>

export default EventPage;
