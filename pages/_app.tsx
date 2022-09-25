import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/global.styles';
import theme from '../themes/light';

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
