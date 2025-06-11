// WhyChooseUs.jsx
import React from 'react';
import { GraduationCap, Target, Award } from 'lucide-react';
import styled from 'styled-components';

const features = [
  {
    icon: GraduationCap,
    title: "Experienced Advocates",
    description: "Seasoned lawyers with deep expertise in Odisha legal landscape"
  },
  {
    icon: Target,
    title: "Tailored Legal Strategies",
    description: "Customized solutions designed for your specific legal needs"
  },
  {
    icon: Award,
    title: "Commitment to Excellence",
    description: "Dedicated to achieving the best possible outcomes for our clients"
  }
];

const Section = styled.section`
  padding: 4rem 0;
  background: #f9fafb;
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
  @media (max-width: 480px) {
    padding: 1.25rem 0;
  }
`;
const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  @media (max-width: 480px) {
    padding: 0 0.5rem;
  }
`;
const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
  text-align: center;
  color: #1a1a1a;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;
const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
  }
`;
const FeatureCard = styled.div`
  text-align: center;
  background: #fff;
  border-radius: 8px;
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.07);
  @media (max-width: 480px) {
    padding: 1.25rem 0.75rem 1rem 0.75rem;
  }
`;
const IconCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  background: #ff6b35;
  border-radius: 50%;
  margin: 0 auto 1rem auto;
`;
const FeatureTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.75rem;
  @media (min-width: 480px) {
    font-size: 1.25rem;
  }
`;
const FeatureDesc = styled.p`
  color: #4b5563;
  font-size: 0.98rem;
  @media (min-width: 480px) {
    font-size: 1.05rem;
  }
`;

const WhyChooseUs = () => (
  <Section>
    <Container>
      <Title>Why Choose DKP & Associates</Title>
      <FeaturesGrid>
        {features.map((feature, index) => (
          <FeatureCard key={index}>
            <IconCircle>
              <feature.icon className="h-10 w-10 text-white" />
            </IconCircle>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDesc>{feature.description}</FeatureDesc>
          </FeatureCard>
        ))}
      </FeaturesGrid>
    </Container>
  </Section>
);

export default WhyChooseUs;
