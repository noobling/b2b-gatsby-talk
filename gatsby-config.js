require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Social Hub',
    description: 'Collection of our social sites',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
        gatsbyRemarkPlugins: [{ resolve: 'gatsby-remark-images' }],
        plugins: [{ resolve: 'gatsby-remark-images' }],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: 'posts',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'images',
      },
    },
    {
      resolve: 'gatsby-source-instagram',
      options: {
        username: 'insidereadify',
      },
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        production: true,
        disable: !process.env.ANALYZE_BUNDLE_SIZE,
        generateStatsFile: true,
        analyzerMode: 'static',
      },
    },
    {
      resolve: 'gatsby-source-instagram',
      options: {
        username: 'insidereadify',
      },
    },
    {
      resolve: 'gatsby-source-twitter',
      options: {
        credentials: {
          consumer_key: process.env.TWITTER_CONSUMER_KEY,
          consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
          bearer_token: process.env.TWITTER_BEARER_TOKEN,
        },
        queries: {
          hashtags: {
            endpoint: 'search/tweets',
            params: {
              q: '#telstrapurple',
              tweet_mode: 'extended',
            },
          },
          tweets: {
            endpoint: 'statuses/user_timeline',
            params: {
              screen_name: 'readify',
              include_rts: false,
              exclude_replies: true,
              tweet_mode: 'extended',
            },
          },
        },
      },
    },
  ],
};
