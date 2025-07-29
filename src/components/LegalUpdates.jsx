// src/components/LegalUpdates.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import sanityClient from '../sanityClient.js';

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
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 15px;
  font-weight: 600;
`;

const CardText = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
`;

const ReadMore = styled.button`
  color: #e30613;
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
  margin-top: 20px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e30613;
    color: white;
  }
`;

const LoadingMessage = styled.div`
  text-align: center;
  color: #fff;
  font-size: 1.2rem;
`;

const LegalUpdates = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "post"]{title, slug, body}`)
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
        setLoading(false);
      });
  }, []);

  const convertToText = (body) => {
    if (Array.isArray(body)) {
      return body
        .map((block) =>
          block.children ? block.children.map((child) => child.text).join(' ') : ''
        )
        .join(' ');
    }
    return body;
  };

  const getExcerpt = (body) => {
    const text = convertToText(body);
    const words = text.split(' ');
    return words.slice(0, 20).join(' ') + (words.length > 20 ? '...' : '');
  };

  const handleReadMore = () => {
    navigate('/articles-blogs'); // Redirect to blog page
  };

  if (loading) {
    return (
      <LegalUpdatesWrapper>
        <LoadingMessage>Loading Legal Updates...</LoadingMessage>
      </LegalUpdatesWrapper>
    );
  }

  return (
    <LegalUpdatesWrapper>
      <Title>Legal Updates</Title>
      <Underline />
      <CardsContainer>
        {posts.slice(0, 3).map((post, index) => (
          <Card key={index}>
            <CardTitle>{post.title}</CardTitle>
            <CardText>{getExcerpt(post.body)}</CardText>
            <ReadMore onClick={handleReadMore}>Read More</ReadMore>
          </Card>
        ))}
      </CardsContainer>
    </LegalUpdatesWrapper>
  );
};

export default LegalUpdates;