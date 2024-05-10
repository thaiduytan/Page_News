"use client";
import { Box, Flex, Group, Menu, rem, Text } from "@mantine/core";
import React from "react";
import Notification from "@/components/Authentication/Notification";
import { Avatar } from "@/components/Avatar";
import { IconLogout } from "@tabler/icons-react";
import { inter } from "@/theme/fonts";

const user: {
  avatar: string;
  name: string;
} = {
  avatar: "/assets/images/avatar.png",
  name: "Shane Van Boening",
};

const Authentication = () => {
  const session = true;
  return session ? (
    <Flex justify="flex-end" w={"100%"} flex={1}>
      <Group gap={40}>
        <Notification />

        <Menu shadow="md" width={200}>
          <Menu.Target>
            <Group gap={15} style={{ cursor: "pointer" }}>
              <Text
                span
                className={inter.className}
                fz={rem(14)}
                fw={400}
                c={"var(--mantine-color-white)"}
              >
                {user.name}
              </Text>
              <Avatar size={rem(50)} src={user.avatar}/>
            </Group>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Label>Applications</Menu.Label>
            <Menu.Item
              leftSection={
                <IconLogout style={{ width: rem(14), height: rem(14) }} />
              }
            >
              Logout
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Group>
    </Flex>
  ) : (
    <Box>asd</Box>
  );
};

export default Authentication;
