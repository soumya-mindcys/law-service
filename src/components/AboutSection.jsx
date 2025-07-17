// AboutSection.jsx
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import lawyerProfileImg from '../assets/1654083998_lawyer-profile.png';
import BeliefsSection from './BeliefsSection';
import PhilosophySection from './PhilosophySection'

const Section = styled.section`
  padding: 4rem 0;
  background: #f9fafb;
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;
const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  @media (max-width: 768px) {
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
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
`;
const Text = styled.p`
  color: #374151;
  font-size: 1.125rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 480px) {
    margin-top: 1.5rem;
  }
`;
const StyledImg = styled.img`
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
  width: 100%;
  max-width: 20rem;
  object-fit: cover;
  @media (max-width: 480px) {
    max-width: 14rem;
  }
`;
const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 3rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 480px) {
    gap: 1rem;
    margin-top: 2rem;
  }
`;
const StatCard = styled.div`
  background: #fff;
  border-radius: 0.75rem;
  box-shadow: 0 2px 8px rgba(255,107,53,0.07);
  padding: 1.5rem 1rem;
  text-align: center;
  @media (max-width: 480px) {
    padding: 1rem 0.5rem;
  }
`;
const StatNumber = styled.div`
  font-size: 1.875rem;
  font-weight: 700;
  color: #ff6b35;
  margin-bottom: 0.5rem;
  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;
const StatLabel = styled.div`
  color: #111;
  font-weight: 600;
  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;
const QuoteBox = styled.div`
  margin-top: 3rem;
  background: #fff;
  padding: 1.5rem;
  border-radius: 0.75rem;
  border-left: 4px solid #ff6b35;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  @media (max-width: 480px) {
    margin-top: 2rem;
    padding: 1rem;
  }
`;
const Blockquote = styled.blockquote`
  font-size: 1.25rem;
  font-style: italic;
  color: #374151;
  margin-bottom: 1rem;
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;
const Cite = styled.cite`
  color: #ff6b35;
  font-weight: 600;
  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

// CountUp component for animated numbers
const CountUp = ({ end, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60); // 60 frames per second
    let frame;
    const step = () => {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        frame = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [end, duration]);
  return <>{count}{suffix}</>;
};

const AboutSection = () => (
  <>
  <Section id="about">
    <Container>
      <Title>About DKP & Associates</Title>
      <Grid>
        <div>
          <Text>
            Established with a commitment to excellence, DKP & Associates has been serving clients 
            across Odisha with comprehensive legal solutions. Our team of experienced advocates 
            brings deep understanding of local legal landscape and regulatory frameworks.
          </Text>
          <Text as="p" style={{marginBottom: 0}}>
            We specialize in commercial law, mining law, trade regulations, and dispute resolution, 
            providing personalized strategies for each client's unique needs.
          </Text>
        </div>
        <ImageWrapper>
          <StyledImg 
            src={lawyerProfileImg} 
            alt="DKP & Associates Office" 
          />
        </ImageWrapper>
      </Grid>
      <StatsGrid>
        <StatCard>
          <StatNumber><CountUp end={1000} duration={2} suffix="+" /></StatNumber>
          <StatLabel>Cases Handled</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber><CountUp end={5} duration={2} suffix="+" /></StatNumber>
          <StatLabel>Years Experience</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber><CountUp end={30} duration={2} /></StatNumber>
          <StatLabel>Odisha Districts</StatLabel>
        </StatCard>
      </StatsGrid>
      <QuoteBox>
        <Blockquote>
          "At DKP & Associates, your success is our success. We are committed to providing 
          exceptional legal services with integrity and dedication."
        </Blockquote>
        <Cite>- Managing Partner</Cite>
      </QuoteBox>
    </Container>
  </Section>
  <PhilosophySection/>
  <BeliefsSection/>
  </>
);

export default AboutSection;
