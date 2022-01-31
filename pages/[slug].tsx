import React from 'react';
import { useRouter } from 'next/router';
import { PostPage } from '../components';

export default () => {
  const router = useRouter();
  const { slug } = router.query;

  return <PostPage />;
};
