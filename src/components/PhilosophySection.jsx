import React from 'react';
import styled from 'styled-components';
import PhilosophyImage from '../assets/PhilosophyImage.jpg';

const Section = styled.section`
  padding: 60px 20px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  /* margin-bottom: 10px; */

  h2 {
    font-size: 2rem;
    font-weight: 700;
  }

  img {
    width: 50px;
    height: 50px;
  }
`;

const Underline = styled.div`
 font-size: 2.2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 30px;
  color: #111;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 140px;
    height: 4px;
    background: orange;
    border-radius: 4px;
    animation: growBar 1s ease-in-out forwards;
  }

  @keyframes growBar {
    from {
      width: 0;
    }
    to {
      width: 140px;
    }
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  max-width: 1200px;
  width: 100%;
`;

const ImageBox = styled.div`
  position: relative;
  width: 500px;
  max-width: 100%;

  &::before {
    content: '';
    position: absolute;
    bottom: -20px;
    left: -20px;
    width: 100%;
    height: 100%;
    background-color: #d8ad52; /* gold background */
    z-index: 0;
  }

  img {
    position: relative;
    width: 100%;
    height: auto;
    object-fit: cover;
    z-index: 1;
    border: 4px solid #fff;
  }
`;

const TextBox = styled.div`
  flex: 1;
  max-width: 600px;
  font-size: 1rem;
  line-height: 1.8;
  color: #222;
  text-align: justify;
`;

const PhilosophySection = () => {
  return (
    <Section>
      <TitleWrapper>
        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Logo" />
        <h2>Our Philosophy</h2>
      </TitleWrapper>
      <Underline />
      <ContentWrapper>
        <ImageBox>
          <img src={PhilosophyImage} alt="Philosophy Office" />
        </ImageBox>
        <TextBox>
          Effective dispute resolution demands a tailored strategy aligned with our client’s objectives.
          Our dedicated legal team places paramount importance on comprehending our clients and their unique circumstances.
          This deep understanding enables us to precisely identify our clients’ aims and collaborate with them to chart the optimal path forward.
          We constantly strive to uncover cost-effective resolutions, prioritizing economic efficiency whenever viable.
          Our commitment lies in ensuring that our dispute resolution methods serve as precise instruments,
          finely tuned to achieve our clients’ desired outcomes while minimizing expenses and resources.
          This approach defines our client-centric, goal-driven, and fiscally responsible approach to dispute resolution.
        </TextBox>
      </ContentWrapper>
    </Section>
  );
};

export default PhilosophySection;
