import { PostType } from '../../types';
import { Container } from './styled';

type Props = {
  data: PostType[];
};

export const HomePage: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      {data.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </Container>
  );
};
