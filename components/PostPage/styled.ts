import styled from 'styled-components';

export const Container = styled.section`
  h1 {
    font-size: 2rem;
    font-weight: 600;
    color: ${(props) => props.theme.colors.textTitle};
  }

  p {
    margin-top: 2rem;
    font-size: 1.6rem;
    color: ${(props) => props.theme.colors.textNormal};
  }
`;
