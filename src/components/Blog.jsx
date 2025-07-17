import React, { useEffect, useState } from 'react';
import sanityClient from '../sanityClient.js';
import { PortableText } from '@portabletext/react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 3rem 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 50px;
`;

const PostCard = styled.div`
  background: #fafafa;
  padding: 1.8rem;
  border-radius: 20px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.05);
  margin-bottom: 2rem;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 6px 24px rgba(0,0,0,0.1);
    transform: translateY(-2px);
  }
`;

const Title = styled.h2`
  font-size: 1.75rem;
  color: #1f2937;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #2563eb;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  border-radius: 14px;
  margin-bottom: 1.2rem;
  border: 3px solid #fff;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.015);
  }
`;

const Body = styled.div`
  color: #4b5563;
  font-size: 1rem;
  line-height: 1.65;
`;

const ReadMoreButton = styled.button`
  margin-top: 1rem;
  background: none;
  border: none;
  color: #2563eb;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  padding: 0;
  display: inline-block;
  position: relative;

  &:hover {
    color: #1d4ed8;
  }

  &::after {
    content: '';
    display: block;
    height: 2px;
    background: currentColor;
    transition: width 0.3s ease;
    width: 0%;
  }

  &:hover::after {
    width: 100%;
  }
`;

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [expandedPost, setExpandedPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "post"]{title, slug, mainImage{asset->{url}}, body}`)
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  const toggleExpand = (index) => {
    setExpandedPost(expandedPost === index ? null : index);
  };

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
    return words.slice(0, 25).join(' ') + '...';
  };

  return (
    <Container>
      {posts.map((post, index) => (
        <PostCard key={index}>
          <Title onClick={() => toggleExpand(index)}>{post.title}</Title>

          {post.mainImage && <Image src={post.mainImage.asset.url} alt={post.title} />}

          <Body>
            <PortableText value={expandedPost === index ? post.body : getExcerpt(post.body)} />
            <ReadMoreButton onClick={() => toggleExpand(index)}>
              {expandedPost === index ? 'Read Less' : 'Read More'}
            </ReadMoreButton>
          </Body>
        </PostCard>
      ))}
    </Container>
  );
};

export default Blog;
