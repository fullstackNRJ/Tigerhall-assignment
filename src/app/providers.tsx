"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    600: "#FF5900",
    400: "#FFA97A",
  },
  tigerOrange: {
    400: "#FFA97A",
  },
  grey: {
    900: "#383733",
    800: "#4D4B46",
    700: "#797670",
  },
  background: {
    1: "#001315",
    2: "rgba(0, 0, 0, 0.7)",
  },
};

const theme = extendTheme({ colors });

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
