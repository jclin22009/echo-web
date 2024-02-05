// app/page.tsx
"use client";

import {
  HStack,
  Heading,
  Text,
  VStack,
  IconButton,
  useColorMode,
  Button,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

export default function Page() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <VStack h="100vh" p={3} justifyContent="space-between">
      <HStack id="navbar" w="100%" justifyContent="space-between">
        <Heading fontWeight="light">Echo</Heading>
        <HStack spacing={10}>
          <Text>Contact</Text>
          <IconButton
            aria-label="colormode"
            onClick={toggleColorMode}
            icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
          ></IconButton>
        </HStack>
      </HStack>
      <VStack spacing={10}>
        <Heading size="4xl" fontWeight="medium">
          Journal with awareness.
        </Heading>
        <NextLink
          href="https://docs.google.com/forms/d/e/1FAIpQLSf-p2YBG-44QUVOxS-AogJJOTx9j1W6eCKQpEP64e5pKKmvwQ/viewform?usp=sf_link"
          passHref
        >
          <Button size="lg" colorScheme="purple">
            Join Waitlist
          </Button>
        </NextLink>
      </VStack>
      <HStack id="footer">
        <Text color="darkgrey">© 2024 Echo</Text>
      </HStack>
    </VStack>
  );
}
