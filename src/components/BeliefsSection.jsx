import React from 'react';
import styled, { keyframes } from 'styled-components';

// === Styled CSS ===

const Section = styled.section`
  padding: 60px 20px;
  /* background: linear-gradient(to bottom right, #f0f4ff, #e4ecf9); */
`;

const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 50px;
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

const Logo = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0,0,0,0.2);
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
`;

const Card = styled.div`
  background: white;
  border-radius: 20px;
  padding: 30px 24px;
  max-width: 340px;
  width: 100%;
  text-align: left;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(236, 176, 13, 0.47);
  }
`;

const Heading = styled.h3`
  font-size: 1.4rem;
  color: #1a1a1a;
  margin-bottom: 12px;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #444;
  line-height: 1.7;
`;

// === Main Component ===

const BeliefsSection = () => {
  const data = [
    {
      title: 'Significance',
      desc: `Every client across every piece of work has a different outcome that represents value to them. We take the time to understand your time and budget requirements to ensure we deliver value every time you instruct us. We encourage feedback and incorporate the learning into our practice.`,
    },
    {
      title: 'Integrity And Ethics',
      desc: `The principle and founder of the firm Mr. Krishna Kumar Mishra, has repeatedly earned the highest rating available for his professional excellence. Mr. Mishra believes in hard work be adequate and pass apparent message to his clients and his colleagues.`,
    },
    {
      title: 'Savvy Thinking',
      desc: `The dictionary defines savvy as demonstrating Practical understanding, shrewdness, intelligence and common sense. To that we would add "Knowledge". It's a winning combination. Our intention is to continually grow our understanding of what represents value to you.`,
    },
  ];

  return (
   <Section>
  <div style={{ textAlign: 'center' }}>
    <Logo src="https://placehold.co/48x48/png?text=P" alt="logo" style={{ verticalAlign: 'middle', marginRight: '12px' }} />
    <Title>Preach Law Believes In</Title>
  </div>
  <CardContainer>
    {data.map((item, index) => (
      <Card key={index}>
        <Heading>{item.title}</Heading>
        <Description>{item.desc}</Description>
      </Card>
    ))}
  </CardContainer>
</Section>

  );
};

export default BeliefsSection;
