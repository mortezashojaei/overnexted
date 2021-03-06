import Link from 'next/link';
import Toggle from 'react-toggle';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  selectTheme,
  setDarkTheme,
  setLightTheme,
} from '../../store/theme';
import { Container } from './styled';

export const AppHeader = () => {
  const { isDark } = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  function handleToggle() {
    dispatch(isDark ? setLightTheme() : setDarkTheme());
  }

  return (
    <Container>
      <h1>
        <Link href="/">
          <a>Overnexted</a>
        </Link>
      </h1>

      <Toggle checked={isDark} onClick={handleToggle} />
    </Container>
  );
};
