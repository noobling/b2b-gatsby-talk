import { useStaticQuery, graphql } from 'gatsby';

const useTweets = params => {
  const {
    allTwitterSearchTweetsHashtags: { nodes: tweets },
  } = useStaticQuery(graphql`
    query {
      allTwitterSearchTweetsHashtags {
        nodes {
          full_text
          user {
            name
            profile_image_url_https
          }
        }
      }
    }
  `);

  return { tweets };
};

export default useTweets;
