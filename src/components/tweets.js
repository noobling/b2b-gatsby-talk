import React, { useState } from 'react';
import useTweets from '../hooks/use-tweets';
import css from '@emotion/css';
import Button from './button';

const Tweets = () => {
  const { tweets } = useTweets();
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <h2
        css={css`
          margin-bottom: 1rem;
        `}
      >
        Recent Tweets
      </h2>
      <ul
        css={css`
          padding: 0;
        `}
      >
        {tweets.map((tweet, index) => {
          if (expanded || index < 5) {
            return (
              <li
                css={css`
                  list-style: none;
                  margin-bottom: 1rem;
                  display: flex;
                `}
                key={index}
              >
                <div
                  css={css`
                    margin-right: 1rem;
                    width: 50px;
                  `}
                >
                  <img
                    src={tweet.user.profile_image_url_https}
                    alt={tweet.user.name}
                  />
                  <p
                    css={css`
                      margin: 0;
                      font-size: 0.7rem;
                      word-break: break-all;
                    `}
                  >
                    {tweet.user.name}
                  </p>
                </div>
                <p
                  css={css`
                    margin: 0;
                  `}
                >
                  {tweet.full_text}
                </p>
              </li>
            );
          } else {
            return '';
          }
        })}
        {expanded ? (
          <Button onClick={() => setExpanded(false)}>Show less</Button>
        ) : (
          <Button onClick={() => setExpanded(true)}>Show more</Button>
        )}
      </ul>
    </>
  );
};

export default Tweets;
