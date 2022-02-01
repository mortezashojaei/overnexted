import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../store';
import { ThemeProvider } from '../style';
import 'react-toggle/style.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
