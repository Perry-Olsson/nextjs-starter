import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { DefaultTheme } from "styled-components";
import { ThemeProvider as _ThemeProvider } from "styled-components";

export const lightTheme: DefaultTheme = {
  background: {
    primary: "#ffffff",
    secondary: "#2c313d",
  },
  text: {
    primary: "#353535",
    secondary: "#ffffff",
  },
};

export const darkTheme: DefaultTheme = {
  background: {
    primary: "#2c313d",
    secondary: "#f5f5f5",
  },
  text: {
    primary: "#ffffff",
    secondary: "#353535",
  },
};

declare module "styled-components" {
  export interface DefaultTheme {
    background: {
      primary: string;
      secondary: string;
    };
    text: {
      primary: string;
      secondary: string;
    };
  }
}

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState(true);

  function toggle() {
    if (theme) setTheme(false);
    else setTheme(true);
  }

  return (
    <_ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <ToggleProvider toggler={toggle}>{children}</ToggleProvider>
    </_ThemeProvider>
  );
};

const ToggleContext = createContext<() => void | undefined>(undefined);

const ToggleProvider: FC<{ toggler: () => void }> = ({ children, toggler }) => {
  return (
    <ToggleContext.Provider value={toggler}>{children}</ToggleContext.Provider>
  );
};

export const useThemeToggler = () => {
  const toggler = useContext(ToggleContext);
  if (toggler === undefined)
    throw Error("useThemeToggler must be called within its provider");
  return toggler;
};
