import React, { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "components";
import { GlobalStyle } from "../pages/_app";
import renderer from "react-test-renderer";

const AllTheProviders: FC = ({ children }) => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

const customSnapRenderer = (component: ReactElement) => {
  return renderer.create(<AllTheProviders>{component}</AllTheProviders>);
};

export * from "@testing-library/react";
export { customRender as render };
export { customSnapRenderer as createSnap };
