import { InferGetServerSidePropsType } from 'next';
import { getPostsList } from '../api';
import { HomePage } from '../components';

export const getServerSideProps = async () => {
  const data = await getPostsList();

  return {
    props: {
      data: data.data,
    },
  };
};

export default function Home({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <HomePage data={data} />;
}
