// HeroSection.jsx
import React from 'react';
import styled from 'styled-components';
import LegalUpdates from "./LegalUpdates"

const Section = styled.section`
  min-height: 100vh;
  background: linear-gradient(135deg, #374151 0%, #1f2937 100%);
  position: relative;
  display: flex;
  align-items: center;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><pattern id="legal-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="2" fill="%23ff6b35" opacity="0.1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23legal-pattern)"/></svg>');
  @media (max-width: 768px) {
    min-height: 70vh;
    padding: 2rem 0;
  }
  @media (max-width: 480px) {
    min-height: 60vh;
    padding: 1.25rem 0;
  }
`;
const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
`;
const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  height: 100%;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    padding: 0 0.5rem;
  }
`;
const Centered = styled.div`
  text-align: center;
  max-width: 56rem;
  margin: 0 auto;
  @media (max-width: 480px) {
    max-width: 100%;
  }
`;
const Title = styled.h1`
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 700;
  color: #fff;
  margin-bottom: 24px;
  line-height: 1.2;
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 16px;
  }
  @media (max-width: 480px) {
    font-size: 1.4rem;
    margin-bottom: 12px;
  }
`;
const OrangeSpan = styled.span`
  color: #ff6b35;
`;
const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #d1d5db;
  margin-bottom: 32px;
  max-width: 32rem;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 768px) {
    font-size: 1.05rem;
    margin-bottom: 20px;
  }
  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 14px;
  }
`;
const ButtonRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
  @media (min-width: 640px) {
    flex-direction: row;
  }
  @media (max-width: 480px) {
    gap: 0.5rem;
    margin-top: 1rem;
  }
`;
const PrimaryButton = styled.button`
  background-color: #ff6b35;
  color: #fff;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #e55a2b;
  }
  @media (max-width: 480px) {
    padding: 10px 12px;
    font-size: 1rem;
  }
`;
const SecondaryButton = styled.button`
  border: 2px solid #fff;
  color: #fff;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  background: transparent;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    color: #ff6b35;
  }
  @media (max-width: 480px) {
    padding: 10px 12px;
    font-size: 1rem;
  }
`;

const HeroSection = ({ scrollToSection }) => (
  <>
  <Section id="home">
    <Overlay>
      <Container>
        <Centered>
          <Title>
            Navigating Your <OrangeSpan>Legal Challenges</OrangeSpan> with 
            <OrangeSpan> Expertise</OrangeSpan> and Integrity
          </Title>
          <Subtitle>
            At DKP & Associates, we deliver trusted legal solutions across Odisha
          </Subtitle>
          <ButtonRow>
            <PrimaryButton onClick={() => scrollToSection('contact')}>
              Book Free Consultation
            </PrimaryButton>
            <SecondaryButton onClick={() => scrollToSection('contact')}>
              Ask Legal Expert
            </SecondaryButton>
          </ButtonRow>
        </Centered>
      </Container>
    </Overlay>
  </Section>
   <LegalUpdates />
   </>
);

export default HeroSection;
