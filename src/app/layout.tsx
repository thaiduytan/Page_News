import { Providers } from "@/providers";
import { ThemeProvider } from "@/theme/ThemeProvider";
import { ColorSchemeScript } from "@mantine/core";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News",
  description: "Reading news trending",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
