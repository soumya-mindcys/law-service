// src/components/LegalUpdates.jsx
import React from 'react';
import styled from 'styled-components';

const LegalUpdatesWrapper = styled.section`
  background: url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac') no-repeat center center/cover;
  padding: 60px 20px;
  min-height: 100vh;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: #fff;
  font-weight: 700;
  margin-bottom: 10px;
`;

const Underline = styled.div`
  width: 60px;
  height: 4px;
  background-color: #fff;
  margin: 0 auto 40px;
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const Card = styled.div`
  background: #fff;
  padding: 30px 20px;
  max-width: 350px;
  border: 2px solid #e30613;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const CardText = styled.p`
  font-size: 1rem;
  color: #333;
`;

const ReadMore = styled.a`
  color: #e30613;
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
  margin-top: 20px;

  &:hover {
    text-decoration: underline;
  }
`;

const LegalUpdates = () => {
  const updates = [
    {
      text: "SC refuses to entertain plea seeking CBI probe into death of former Arunachal CM Kalikho Pul",
    },
    {
      text: "Supreme Court gives approval for COVID in-patient facility within court complex, leaves it to Delhi government to operate the facility",
    },
    {
      text: "The Supreme Court has rejected the plea (of tenants) for a waiver on rent. Meaning the payment of rent cannot be refused and is mandatory for the tenant for any property that they occupy",
    },
  ];

  return (
    <LegalUpdatesWrapper>
      <Title>Legal Updates</Title>
      <Underline />
      <CardsContainer>
        {updates.map((item, index) => (
          <Card key={index}>
            <CardText>{item.text}</CardText>
            <ReadMore href="#">Read More</ReadMore>
          </Card>
        ))}
      </CardsContainer>
    </LegalUpdatesWrapper>
  );
};

export default LegalUpdates;
