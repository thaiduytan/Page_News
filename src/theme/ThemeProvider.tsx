import { MantineProvider } from "@mantine/core";
import { PropsWithChildren } from "react";
import { theme } from "./theme";
import "@mantine/core/styles.css";

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <MantineProvider
      theme={theme}
      classNamesPrefix="news"
      defaultColorScheme="dark"
    >
      {children}
    </MantineProvider>
  );
};
