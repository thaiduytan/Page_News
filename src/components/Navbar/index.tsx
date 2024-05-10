import React from "react";
import {
  AppShell,
  Box,
  Divider,
  Flex,
  Group,
  Image,
  NavLink,
  rem,
  ScrollArea,
  Stack,
  Text,
  Title,
  UnstyledButton,
} from "@mantine/core";
import Navigation from "@/components/Navigation";
import Search from "@/components/Search";
import { Avatar } from "@/components/Avatar";

import Link from "next/link";

import { IconCategory, IconLogout } from "@tabler/icons-react";
import { montserrat } from "@/theme/fonts";

import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <Flex
      pos="relative"
      w="100%"
      h="100%"
      p="lg"
      direction="column"
      className={classes.navbar}
    >
      <UnstyledButton
        className="logo"
        component={Link}
        href="/"
        mx={"auto"}
        visibleFrom="sm"
      >
        <Image
          src={"/assets/images/logo.png"}
          alt="logo"
          w={rem(200)}
          h={rem(40)}
        />
      </UnstyledButton>
      <AppShell.Section grow component={ScrollArea} type="scroll">
        <Stack px={10} hiddenFrom="sm">
          <Avatar size={"lg"} src={"/assets/images/avatar.png"} />
          <Title className={montserrat.className} c={"#fff"} order={4}>
            Shane Van Boeing
          </Title>
        </Stack>
        <Box
          mt={{
            base: 30,
            sm: 60,
          }}
          mb={40}
        >
          <Search />
        </Box>
        <Group gap={15} mb={35}>
          <IconCategory size={"1rem"} color="#fff" />
          <Text
            className={montserrat.className}
            fz={20}
            fw={600}
            lts={rem(1.4)}
            tt={"capitalize"}
            c={"#ffff"}
          >
            All News
          </Text>
        </Group>
        <Navigation />
        <Divider size={0.5} my={15} hiddenFrom="sm" />
        <NavLink
          hiddenFrom="sm"
          href="#required-for-focus"
          label="Logout"
          color="white"
          className={montserrat.className}
          leftSection={<IconLogout size="1rem" stroke={1.5} />}
          active
          variant="subtle"
        />
      </AppShell.Section>
    </Flex>
  );
};

export default Navbar;
