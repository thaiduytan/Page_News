import { ActionIcon, Menu, rem } from "@mantine/core";
import { IconBellFilled, IconSettings } from "@tabler/icons-react";
import React from "react";

const Notification = () => {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <ActionIcon variant="transparent" color="#D9D9D9" aria-label="Settings">
          <IconBellFilled size={"2rem"} stroke={2.5} />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>Notifications</Menu.Label>
        <Menu.Item
          leftSection={
            <IconSettings style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Ayden
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default Notification;
