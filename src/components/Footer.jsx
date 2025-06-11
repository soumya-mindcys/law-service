// Footer.jsx
import React from 'react';
import { Scale, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: #000;
  color: #fff;
  padding: 3rem 0;
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
  @media (max-width: 480px) {
    padding: 1.25rem 0;
  }
`;
const FooterContainer = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1rem;
  @media (max-width: 480px) {
    padding: 0 0.5rem;
  }
`;
const FooterGrid = styled.div`
  display: grid;
  gap: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;
const BrandRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  @media (max-width: 480px) {
    gap: 0.25rem;
    margin-bottom: 0.5rem;
  }
`;
const BrandName = styled.span`
  font-size: 1.125rem;
  font-weight: bold;
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;
const FooterText = styled.p`
  color: #d1d5db;
  margin-bottom: 1rem;
  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 0.5rem;
  }
`;
const FooterSubText = styled.div`
  color: #9ca3af;
  font-size: 0.875rem;
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;
const FooterTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`;
const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  @media (max-width: 480px) {
    gap: 0.25rem;
  }
`;
const FooterLink = styled.button`
  background: none;
  border: none;
  color: #fff;
  text-align: left;
  padding: 0;
  font-size: 1rem;
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: #ff6b35;
  }
  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;
const FooterA = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.2s;
  &:hover {
    color: #ff6b35;
  }
  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;
const AddressText = styled.div`
  color: #d1d5db;
  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;
const SocialRow = styled.div`
  display: flex;
  gap: 0.75rem;
  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;
const SocialIcon = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 2.25rem;
  height: 2.25rem;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #ff6b35;
    color: #fff;
  }
  @media (max-width: 480px) {
    width: 1.75rem;
    height: 1.75rem;
  }
`;
const FooterBottom = styled.div`
  border-top: 2px solid #ff6b35;
  margin-top: 2rem;
  padding-top: 2rem;
  text-align: center;
  @media (max-width: 480px) {
    margin-top: 1rem;
    padding-top: 1rem;
  }
`;
const FooterBottomText = styled.p`
  color: #9ca3af;
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;
const DisclaimerA = styled.a`
  color: #ff6b35;
  margin-left: 0.25rem;
  text-decoration: none;
  &:hover {
    color: #ff944d;
  }
  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const Footer = ({ scrollToSection }) => (
  <FooterWrapper>
    <FooterContainer>
      <FooterGrid>
        <div>
          <BrandRow>
            <Scale className="h-6 w-6" style={{ color: '#ff6b35' }} />
            <BrandName>DKP & Associates</BrandName>
          </BrandRow>
          <FooterText>
            Providing trusted legal solutions across Odisha since 2008. 
            Your success is our commitment.
          </FooterText>
          <FooterSubText>Established 2008</FooterSubText>
        </div>
        <div>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLinks>
            <FooterLink as="button" onClick={() => scrollToSection('home')}>Home</FooterLink>
            <FooterLink as="button" onClick={() => scrollToSection('about')}>About</FooterLink>
            <FooterLink as="button" onClick={() => scrollToSection('contact')}>Contact</FooterLink>
            <FooterA href="#privacy">Privacy Policy</FooterA>
          </FooterLinks>
        </div>
        <div>
          <FooterTitle>Practice Areas</FooterTitle>
          <FooterLinks>
            <FooterLink as="button" onClick={() => scrollToSection('practice-areas')}>Commercial Law</FooterLink>
            <FooterLink as="button" onClick={() => scrollToSection('practice-areas')}>Mining Law</FooterLink>
            <FooterLink as="button" onClick={() => scrollToSection('practice-areas')}>Trade Law</FooterLink>
            <FooterLink as="button" onClick={() => scrollToSection('practice-areas')}>Competition Law</FooterLink>
            <FooterLink as="button" onClick={() => scrollToSection('practice-areas')}>Dispute Resolution</FooterLink>
          </FooterLinks>
        </div>
        <div>
          <FooterTitle>Connect With Us</FooterTitle>
          <FooterLinks style={{ marginBottom: '1rem' }}>
            <AddressText>123 Legal Complex</AddressText>
            <AddressText>Bhubaneswar, Odisha</AddressText>
            <AddressText>+91-9876543210</AddressText>
            <AddressText>info@dkpassociates.com</AddressText>
          </FooterLinks>
          <SocialRow>
            <SocialIcon href="#"><Facebook className="h-5 w-5" /></SocialIcon>
            <SocialIcon href="#"><Twitter className="h-5 w-5" /></SocialIcon>
            <SocialIcon href="#"><Linkedin className="h-5 w-5" /></SocialIcon>
            <SocialIcon href="#"><Instagram className="h-5 w-5" /></SocialIcon>
          </SocialRow>
        </div>
      </FooterGrid>
      <FooterBottom>
        <FooterBottomText>
          © 2024 DKP & Associates. All Rights Reserved. |
          <DisclaimerA href="#disclaimer">Legal Disclaimer</DisclaimerA>
        </FooterBottomText>
      </FooterBottom>
    </FooterContainer>
  </FooterWrapper>
);

export default Footer;
