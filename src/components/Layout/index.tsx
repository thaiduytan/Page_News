"use client";

import { AppShell, Image } from "@mantine/core";
import { useClickOutside, useDisclosure } from "@mantine/hooks";
import type { PropsWithChildren } from "react";
import Navbar from "@/components/Navbar";
import classes from "./Layout.module.css";

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
      pos={"relative"}
      style={{
        overflow: "hidden",
      }}
      className={classes.layout}
    >
      <AppShell.Navbar withBorder={false}>
        <Navbar />
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};
