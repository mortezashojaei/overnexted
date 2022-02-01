import Head from 'next/head';
import Link from 'next/link';
import { PostType } from '../../types';
import { Container, PostContainer, PostsContainer } from './styled';

type Props = {
  data: PostType[];
};

function getTextCoffeToRead(length: number) {
  return parseInt(`${length / 50}`);
}

function getPublishDate(id: number) {
  let date = new Date('04/28/2020 00:00:00');
  let result = new Date(date);
  result.setDate(result.getDate() + id);
  return `${result.getFullYear()}/${
    result.getMonth() + 1
  }/${result.getDate()}`;
}

export const HomePage: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      <Head>
        <title>Overnexted</title>
      </Head>
      <PostsContainer>
        {data.map((item) => (
          <PostContainer key={item.id}>
            <h3>
              <Link href={`/${item.id}`}>
                <a>{item.title}</a>
              </Link>
            </h3>
            <small>
              {getPublishDate(item.id)}
              {' • '}
              {Array.from(
                Array(getTextCoffeToRead(item.body.length)),
              ).map(() => '☕️')}{' '}
              {getTextCoffeToRead(item.body.length) * 3}
              min read
            </small>
            <p>{item.body.slice(0, 60)}</p>
          </PostContainer>
        ))}
      </PostsContainer>
    </Container>
  );
};
