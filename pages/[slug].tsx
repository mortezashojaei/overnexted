import React from 'react';
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
} from 'next';
import { PostPage } from '../components';
import { showPost } from '../api';

export const getServerSideProps: GetServerSideProps<
  { [key: string]: any },
  { slug: string }
> = async ({ params }) => {
  const data = await showPost(Number(params?.slug));
  return {
    props: {
      data: data.data,
    },
  };
};

export default ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <PostPage data={data} />;
};
