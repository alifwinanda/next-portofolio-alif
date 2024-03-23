"use client"

import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import theme from "@/common/theme"

const globalTheme = extendTheme({
  styles: {
    global: () => ({
      body: {
        background: theme.colors.spaceCadet.DEFAULT,
      },
    }),
  },
})

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={globalTheme}>{children}</ChakraProvider>
}
