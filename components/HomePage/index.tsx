import Head from 'next/head';
import { PostType } from '../../types';
import { Container } from './styled';

type Props = {
  data: PostType[];
};

export const HomePage: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      <Head>
        <title>Overnexted</title>
      </Head>
      <h1>Overnexted</h1>
      {data.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </Container>
  );
};
