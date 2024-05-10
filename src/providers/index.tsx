import TrackContextProvider from "@/context/TrackWrapper";
import { ThemeProvider } from "@/theme/ThemeProvider";
import type { PropsWithChildren } from "react";

export const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider>
      <TrackContextProvider>{children}</TrackContextProvider>
    </ThemeProvider>
  );
};
