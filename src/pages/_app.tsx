import { ThemeProvider } from "components";
import { createGlobalStyle } from "styled-components";
import { MainNav } from "../app/Navigation";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <MainNav />
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

button {
  cursor: pointer;
}
`;
