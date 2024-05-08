import {
  AppShell,
  Box,
  Flex,
  Group,
  Image,
  NavLink,
  rem,
  ScrollArea,
  Text,
  UnstyledButton,
} from "@mantine/core";
import Link from "next/link";
import React from "react";
import Search from "@/components/Search";
import { IconCategory } from "@tabler/icons-react";
import { montserrat } from "@/theme/fonts";
import Navigation from "../Navigation";

const Navbar = () => {
  return (
    <Flex pos="relative" w="100%" h="100%" direction="column">
      <UnstyledButton className="logo" component={Link} href="/" mx={"auto"}>
        <Image
          src={"/assets/images/logo.png"}
          alt="logo"
          w={rem(200)}
          h={rem(40)}
        />
      </UnstyledButton>
      <Box mt={60} mb={40}>
        <Search />
      </Box>

      <AppShell.Section grow component={ScrollArea} type="scroll">
        <Group gap={15} mb={35}>
          <IconCategory size={"1rem"} color="#fff"/>
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
        <Navigation/>
      </AppShell.Section>
    </Flex>
  );
};

export default Navbar;
