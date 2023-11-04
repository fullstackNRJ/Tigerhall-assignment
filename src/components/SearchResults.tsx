import React from "react";
import SearchCardSkeleton from "./SearchCardSkeleton";
import SearchCard, { CardProps } from "./SearchCard";
import { Flex, SimpleGrid } from "@chakra-ui/react";
import { Response, mapToCardProps } from "@/app/util";

const SearchResults = ({
  results,
  loadingResults,
}: {
  results: Array<Response>;
  loadingResults: boolean;
}) => {
  return (
    <SimpleGrid data-testid="search-results" columns={[1, null, 3]} spacing="5">
      {loadingResults
        ? [...Array(6).fill(true)].map((value, idx) => <SearchCardSkeleton />)
        : results
            .map(mapToCardProps)
            .map((result: CardProps, idx: number) => (
              <SearchCard {...result} />
            ))}
    </SimpleGrid>
  );
};

export default SearchResults;
