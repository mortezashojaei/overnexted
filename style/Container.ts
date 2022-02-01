import styled from 'styled-components';

export const AppContainer = styled.main`
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0 0 2rem;
  background-color: ${(props) => props.theme.colors.background};
`;

export const AppBody = styled.section`
  max-width: 42rem;
`;
