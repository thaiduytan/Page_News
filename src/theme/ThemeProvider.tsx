'use client'

import { MantineProvider } from '@mantine/core'
import type { PropsWithChildren } from 'react'
import React from 'react'
import "@mantine/core/styles.css";
import { theme } from './theme'

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <MantineProvider
      theme={theme}
      classNamesPrefix="ayden"
      defaultColorScheme="dark"
    >
      {children}
    </MantineProvider>
  )
}
