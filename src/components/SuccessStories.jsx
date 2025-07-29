// SuccessStories.jsx
import React from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import styled from 'styled-components';
import '../App.css';
import LegalUpdates from "./LegalUpdates"

const Section = styled.section`
  padding: 4rem 0;
  background: #fff;
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
  @media (max-width: 480px) {
    padding: 1.25rem 0;
  }
`;
const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem;
  @media (max-width: 480px) {
    padding: 0 0.5rem;
  }
`;
const CardWrapper = styled.div`
  position: relative;
  max-width: 48rem;
  margin: 0 auto;
`;
const TestimonialCard = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  border-left: 4px solid #ff6b35;
  @media (max-width: 480px) {
    padding: 1.25rem 0.75rem;
  }
`;
const StarsRow = styled.div`
  display: flex;
  margin-bottom: 1rem;
  @media (max-width: 480px) {
    margin-bottom: 0.5rem;
  }
`;
const Blockquote = styled.blockquote`
  font-size: 1.1rem;
  color: #374151;
  margin-bottom: 1.5rem;
  font-style: italic;
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;
const Name = styled.div`
  font-weight: 700;
  color: #ff6b35;
  font-size: 1.1rem;
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;
const Designation = styled.div`
  color: #4b5563;
  font-size: 1rem;
  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;
const ControlsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  gap: 1rem;
  @media (max-width: 480px) {
    margin-top: 1rem;
    gap: 0.5rem;
  }
`;
const NavButton = styled.button`
  padding: 0.5rem;
  border-radius: 9999px;
  background: #ff6b35;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  &:hover {
    background: #e55a2b;
  }
`;
const DotsRow = styled.div`
  display: flex;
  gap: 0.5rem;
`;
const Dot = styled.button`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  border: none;
  background: ${({ active }) => (active ? '#ff6b35' : '#d1d5db')};
  cursor: pointer;
  transition: background 0.2s;
`;

const SuccessStories = ({ testimonials, currentTestimonial, setCurrentTestimonial }) => (
  <>
  <Section id="success-stories">
    <Container>
      <h2 className="section-title">Success Stories</h2>
      <CardWrapper>
        <TestimonialCard>
          <StarsRow>
            {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-orange-500 fill-current" />
            ))}
          </StarsRow>
          <Blockquote>
            "{testimonials[currentTestimonial].text}"
          </Blockquote>
          <div>
            <Name>{testimonials[currentTestimonial].name}</Name>
            <Designation>{testimonials[currentTestimonial].designation}</Designation>
          </div>
        </TestimonialCard>
        <ControlsRow>
          <NavButton onClick={() => setCurrentTestimonial((prev) => prev === 0 ? testimonials.length - 1 : prev - 1)}>
            <ChevronLeft className="h-5 w-5" />
          </NavButton>
          <DotsRow>
            {testimonials.map((_, index) => (
              <Dot
                key={index}
                active={index === currentTestimonial}
                onClick={() => setCurrentTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </DotsRow>
          <NavButton onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}>
            <ChevronRight className="h-5 w-5" />
          </NavButton>
        </ControlsRow>
      </CardWrapper>
    </Container>
  </Section>
   <LegalUpdates />
  </>
);

export default SuccessStories;
