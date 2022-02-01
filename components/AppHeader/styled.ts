import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 2.8rem;
    font-weight: 600;
    color: ${(props) => props.theme.colors.textTitle};
    cursor: pointer;
  }
`;
