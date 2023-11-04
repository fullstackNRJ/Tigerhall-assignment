"use client";
import SearchInput from "@/components/SearchInput";
import SearchResults from "@/components/SearchResults";
import useContentSearch from "@/hooks/useContentSearch";
import { Center, Container, Flex } from "@chakra-ui/react";

import { useState } from "react";

export default function Home() {
  const [inputText, setInputText] = useState<string>("");
  const { results, loadingResults, performSearch } = useContentSearch();

  return (
    <Center
      bg="background.1"
      w="100%"
      minH={{ base: "100%", md: "100vh", lg: "200vh", xl: "100vh" }}
      p={{ base: 4, md: 8 }}
    >
      <Flex
        mt={100}
        align="center"
        //justify="center"
        direction="column"
        gap="10"
        wrap="wrap"
      >
        <SearchInput
          inputText={inputText}
          setInputText={setInputText}
          onPressEnter={performSearch}
        />

        <SearchResults results={results} loadingResults={loadingResults} />
      </Flex>
    </Center>
  );
}
