import React from 'react';
import useInstagram from '../hooks/use-instagram';
import GatsbyImage from 'gatsby-image';
import css from '@emotion/css';
import styled from '@emotion/styled';

const Container = styled('div')`
  display: flex;
  flex-wrap: wrap;
`;

const Insta = () => {
  const data = useInstagram();
  return (
    <>
      <h2>Instagram Posts</h2>
      <Container>
        {data.nodes.map(post => (
          <a
            key={post.id}
            css={css`
              margin: 0;
            `}
            href={`https://instagram.com/p/${post.id}`}
          >
            <GatsbyImage
              fluid={post.localFile.childImageSharp.fluid}
              alt={post.caption}
              key={post.id}
              css={css`
                width: 120px;
                height: 120px;
                margin: 0.25rem;
              `}
            />
          </a>
        ))}
      </Container>
    </>
  );
};

export default Insta;
