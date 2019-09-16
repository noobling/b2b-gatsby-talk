import React from 'react';
import Layout from '../components/layout';
import usePosts from '../hooks/use-posts';
import Hero from '../components/hero';
import PostPreview from '../components/post-preview';
import Tweets from '../components/tweets';
import Insta from '../components/Insta';

export default () => {
  const posts = usePosts();
  return (
    <>
      <Hero />

      <Layout>
        <Insta />

        <Tweets />

        <h2>Example blog</h2>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </Layout>
    </>
  );
};
