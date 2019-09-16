import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link, useStaticQuery, graphql } from 'gatsby';
import GatsbyImage from 'gatsby-image';

const NavLink = styled(Link)`
  color: #222;
  font-size: 1rem;
  font-weight: ${props => props.fontWeight || 'normal'};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;

  &.current-page {
    border-bottom: 2px solid #222;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

const Header = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "logo.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <header
      css={css`
        background: #fff;
        border-bottom: 1px solid #ddd;
        display: flex;
        justify-content: space-between;
        padding: 0.5rem calc((100vw - 550px - 0.5rem) / 2);
      `}
    >
      <NavLink to="/" fontWeight="bold">
        <GatsbyImage
          fluid={image.sharp.fluid}
          alt="logo"
          css={css`
            width: 50px;
            height: 50px;
            * {
              margin-top: 0;
            }
          `}
        />
      </NavLink>
      <nav
        css={css`
          margin-top: auto;
          margin-bottom: auto;
        `}
      >
        <NavLink to="/" activeClassName="current-page">
          Home
        </NavLink>
        <NavLink to="/about/" activeClassName="current-page">
          About
        </NavLink>
        <NavLink to="/contact/" activeClassName="current-page">
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
