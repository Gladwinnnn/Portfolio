import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          Thank you for visiting My Personal Portfolio website! 
        </SectionText>
        <SectionText>
          My name is Gladwin, a final year undergraduate from Singapore Management University (SMU), pursuing a Bachelor of Science (Information System) Degree, with a major in Software Development.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;