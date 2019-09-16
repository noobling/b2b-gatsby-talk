import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import Button from '../components/button';
import BackgroundImage from 'gatsby-background-image';
import css from '@emotion/css';

const About = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "city.jpg" }) {
        sharp: childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <h1>About Me</h1>
      <Link to="/">
        <Button>&larr; back to home</Button>
      </Link>

      <BackgroundImage
        css={css`
          height: 50vh;
        `}
        fluid={image.sharp.fluid}
        fadeIn="soft"
      />

      <p>
        Built this for my B2B talk you can follow me on{' '}
        <a
          href="https://github.com/noobling"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>{' '}
        to see what cool project I am working on outside of work 😄
      </p>
    </Layout>
  );
};

export default About;
