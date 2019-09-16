import React from 'react';
import css from '@emotion/css';

const Button = ({ children, ...props }) => {
  return (
    <button
      css={css`
        background: black;
        border: none;
        color: white;
        font-size: 1.25rem;
        margin: 0;
        :hover {
          cursor: pointer;
        }
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
