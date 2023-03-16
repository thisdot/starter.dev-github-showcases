import React from 'react';
import { OrgLogo, OrgName, OrgInfoContainer, OrgLogoContainter } from './About.styles';

const About = ({ name, avatarUrl }: { name: string; avatarUrl: string }) => {
  return (
    <OrgInfoContainer>
      <OrgLogoContainter>
        <OrgLogo source={{ uri: avatarUrl }} />
      </OrgLogoContainter>
      <OrgName>{name}</OrgName>
    </OrgInfoContainer>
  );
};

export default About;
