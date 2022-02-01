import { ThemeProvider as StyledComponentProvider } from 'styled-components';
import { useAppSelector } from '../store/hooks';
import { selectTheme } from '../store/theme';
import { AppBody, AppContainer } from './Container';
import { GlobalStyles } from './GlobalStyles';
import { darkTheme, lightTheme } from './theme';

export const ThemeProvider: React.FC = ({ children }) => {
  const theme = useAppSelector(selectTheme);

  return (
    <StyledComponentProvider
      theme={theme.isDark ? darkTheme : lightTheme}
    >
      <AppContainer>
        <GlobalStyles />
        <AppBody>{children}</AppBody>
      </AppContainer>
    </StyledComponentProvider>
  );
};
