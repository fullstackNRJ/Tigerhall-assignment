import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Spacer,
} from "@chakra-ui/react";
import React from "react";

const SearchCardSkeleton = ({ isLoaded }: { isLoaded?: boolean }) => {
  return (
    <Card
      w="284px"
      display="flex"
      direction="column"
      align="center"
      justify="center"
      bg="white"
    >
      <CardHeader
        //position="relative"
        w="100%"
        h="160px"
        borderTopRadius="md"
      >
        <Skeleton w="100%" h="100%" isLoaded={isLoaded} fadeDuration={1} />
      </CardHeader>

      <CardBody w="100%" h="100%" alignSelf="flex-start">
        <Flex direction="column" gap="8">
          <Box>
            <SkeletonText
              w="80%"
              noOfLines={2}
              isLoaded={isLoaded}
              fadeDuration={2}
            />
          </Box>
          <Flex direction="column" gap="4">
            <SkeletonText
              w="25%"
              noOfLines={1}
              isLoaded={isLoaded}
              fadeDuration={3}
            />
            <SkeletonText
              w="35%"
              noOfLines={1}
              isLoaded={isLoaded}
              fadeDuration={4}
            />
          </Flex>
        </Flex>
      </CardBody>

      <CardFooter w="100%" p="4">
        <Spacer />
        <Flex gap="4" align="center">
          <SkeletonCircle isLoaded={isLoaded} />
          <SkeletonCircle isLoaded={isLoaded} />
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default SearchCardSkeleton;
