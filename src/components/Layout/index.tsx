'use client'

import {
  AppShell,
  Burger,
  Container,
  Group,
} from '@mantine/core'
import { useClickOutside, useDisclosure } from '@mantine/hooks'
import type { PropsWithChildren } from 'react'

export const HomeLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const [opened, { toggle, close }] = useDisclosure()

  const ref = useClickOutside(() => close())
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="md"
      bg="#0C142E"
    >
      <AppShell.Header
        // style={{
        //   backdropFilter: 'blur(8px)',
        //   backgroundColor: 'rgba(12, 20, 46, 0.75)',
        // }}
        withBorder={false}
      >
        <Container mx="auto" size="lg" h="100%">
          <Group h="100%" align="center">
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="md"
              ref={ref}
            />
            <Group align="center" style={{ flex: 1 }}>
              asd
            </Group>
          </Group>
        </Container>
      </AppShell.Header>

      {/* <AppShell.Navbar px={4} bg="transparent">

      </AppShell.Navbar> */}

      <AppShell.Main p={0}>{children}</AppShell.Main>
    </AppShell>
  )
}
