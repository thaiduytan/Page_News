"use client";

import { AppShell } from "@mantine/core";
import { useClickOutside, useDisclosure } from "@mantine/hooks";
import type { PropsWithChildren } from "react";
import Navbar from "../Navbar";

export const HomeLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const [opened, { toggle, close }] = useDisclosure();

  const ref = useClickOutside(() => close());
  return (
    <AppShell
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
      bg={"var(--mantine-color-black)"}
    >
      <AppShell.Navbar p="lg" bg={"var(--mantine-color-black)"}>
        <Navbar />
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};
