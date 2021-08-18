import { ThemeProvider } from "../components/theme";
import { createGlobalStyle } from "styled-components";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: ${({ theme }) => theme.text.primary};
  background: ${({ theme }) => theme.background.primary};
  font-family: Arial, Helvetica, sans-serif;
}
`;
