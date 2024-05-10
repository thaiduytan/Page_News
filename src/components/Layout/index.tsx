"use client";

import { AppShell, Image } from "@mantine/core";
import { useClickOutside, useDisclosure } from "@mantine/hooks";
import type { PropsWithChildren } from "react";
import Navbar from "@/components/Navbar";
import classes from "../Navbar/Navbar.module.css";

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
      pos={"relative"}
      style={{
        mixBlendMode: "darken",
        overflow: "hidden",
      }}
    >
      <AppShell.Navbar p="lg" withBorder={false} className={classes.navbar}>
        <Navbar />
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
      <Image
        src="/assets/images/Desktop.png"
        h={"100vh"}
        w={"100vw"}
        alt="logo"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
    </AppShell>
  );
};
