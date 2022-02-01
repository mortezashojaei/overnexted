import styled from 'styled-components';

export const Container = styled.section``;

export const PostContainer = styled.article`
  margin-bottom: 4rem;

  h3 {
    cursor: pointer;
    padding: 1rem 0;
    a {
      color: ${(props) => props.theme.colors.textLink};
      font-weight: 600;
      font-size: 2.2rem;
    }
  }
`;

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
`;
