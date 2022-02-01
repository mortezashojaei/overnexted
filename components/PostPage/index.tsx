import Head from 'next/head';
import { PostType } from '../../types';
import { Container } from './styled';

type Props = {
  data: PostType;
};

export const PostPage: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      <Head>
        <title>{data.title}</title>
      </Head>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </Container>
  );
};
