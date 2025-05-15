// src/components/Footer.js

import React from 'react';
import { Box, Container, Typography, styled } from '@mui/material';

const Footer = () => {
  return (
    <FooterContainer>
      <ContentContainer>
        <Section>
          <Title>Ethical Fashion</Title>
          <Text>Chitkara University</Text>
          <Text>Phone: +91 98765432123</Text>
          <Text>GST Number: IN9764543234j312</Text>
        </Section>

        

        <Section>
          <Title>Connect With Us</Title>
          <FooterLink href="https://www.chitkara.edu.in/?utm_Source=Adwords&utm_Medium=Search&utm_Campaign=Brand&utm_term=chitkara%20edu%20in&utm_Content=Brand-Generic&gad_source=1&gad_campaignid=22170124007&gbraid=0AAAAADlMblwiaVZ6hJId2JfI4Ix_fLkDx&gclid=Cj0KCQjww-HABhCGARIsALLO6Xwpv5R3peiv3HqiCmPCMz-VF96jR4cxn7KT88GsOS9l1f2L3qnkUNcaAl2tEALw_wcB">Visit us </FooterLink>
          <FooterLink href="https://www.chitkarauniversity.edu.in/">Our Campus</FooterLink>
          <FooterLink href="#">Ethical Fashion</FooterLink>
        </Section>
      </ContentContainer>
      <BottomBar>&copy; {new Date().getFullYear()} Ethical Fashion. All rights reserved.</BottomBar>
    </FooterContainer>
  );
};

export default Footer;

// Styled Components

const FooterContainer = styled(Box)`
  background: #1a1a1a;
  color: white;
  padding: 40px 0 20px;
  margin-top: 40px;
`;

const ContentContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Section = styled(Box)`
  flex: 1;
  min-width: 220px;
`;

const Title = styled(Typography)`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Text = styled(Typography)`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const FooterLink = styled('a')`
  display: block;
  color: #ccc;
  text-decoration: none;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;

  &:hover {
    color: white;
    text-decoration: underline;
  }
`;

const BottomBar = styled(Box)`
  text-align: center;
  margin-top: 30px;
  color: #888;
  font-size: 0.8rem;
`;
