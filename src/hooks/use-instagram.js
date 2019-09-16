import { useStaticQuery, graphql } from 'gatsby';

const useInstagram = () => {
  const { allInstaNode } = useStaticQuery(graphql`
    query {
      allInstaNode {
        nodes {
          id
          caption
          localFile {
            childImageSharp {
              fluid(maxWidth: 120, maxHeight: 120) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  return allInstaNode;
};

export default useInstagram;
