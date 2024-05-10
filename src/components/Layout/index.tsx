"use client";

import { ActionIcon, AppShell, Burger, em, Group, Image, rem } from "@mantine/core";
import { useClickOutside, useDisclosure, useMediaQuery } from "@mantine/hooks";
import type { PropsWithChildren } from "react";
import Navbar from "@/components/Navbar";
import classes from "./Layout.module.css";

export const HomeLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const smailDevice = useMediaQuery(`(max-width: ${em(750)})`);
  const [opened, { toggle, close }] = useDisclosure();
  const ref = useClickOutside(() => close());
  return (
    <AppShell
      header={{ height: 60, collapsed: smailDevice ? false : true }}
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
      <AppShell.Header withBorder={false} bg={"black"}>
        <Group h={"100%"} align="center" px={15}>
          <Burger opened={opened} onClick={toggle} size="md" color="white"/>
          <Group flex={1} justify="center">
            <Image
              src="/assets/images/logo.png"
              alt="logo"
              w={rem(165)}
              h={rem(50)}
              fit="contain"
            />
          </Group>
          <ActionIcon size="md" style={{ visibility: "hidden", opacity: 0 }} />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar withBorder={false}>
        <Navbar />
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};
