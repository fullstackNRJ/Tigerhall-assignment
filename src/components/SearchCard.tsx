import { Bookmark } from "@/icons/bookmark";
import { Headphones } from "@/icons/headphones";
import { PieChart } from "@/icons/piechart";
import ShareIcon from "@/icons/share";
import { Timer } from "@/icons/timer";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Circle,
  Flex,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/react";

export type CardProps = {
  name: string;
  uri: string;
  category: string;
  author: string;
  company: string;
};

export default function SearchCard(props: CardProps) {
  const { name, uri, author, company, category } = props;

  return (
    <Card
      w="284px"
      display="flex"
      direction="column"
      align="center"
      justify="center"
      transition="transform 0.3s"
      _hover={{ transform: "scale(1.1)" }}
    >
      <ContentHeader uri={uri} duration="20" completedPercent="30" />
      <ContentBody
        category={category}
        name={name.toUpperCase()}
        author={author}
        company={company}
      />
      <ContentFooter />
    </Card>
  );
}

type CHProps = {
  uri: string;
  duration: string | number;
  completedPercent: string | number;
};

function ContentHeader({ uri, duration, completedPercent }: CHProps) {
  return (
    <CardHeader
      position="relative"
      w="100%"
      h="160px"
      display="flex"
      flexDirection="column"
      bgImage={uri || "https://i.pravatar.cc/500"}
      bgSize="cover"
      bgPos="center"
      // bg="gray.100"
      borderTopRadius="md"
    >
      <Flex
        position="absolute"
        left="0"
        top="0"
        borderTopLeftRadius="md"
        p="2"
        bg="whiteAlpha.900"
        alignItems="center"
        gap="4"
      >
        <PieChart color="tigerOrange.400" />
        <Text color="grey.900" fontWeight="semibold">
          {completedPercent}% Completed
        </Text>
      </Flex>

      <Circle position="absolute" left="4" bottom="4" bg="brand.600" p="2">
        <Headphones color="white" />
      </Circle>
      <Flex
        position="absolute"
        right="4"
        bottom="4"
        bg="background.2"
        p="1"
        w="20"
        borderRadius="3xl"
        alignItems={"center"}
        gap="1"
        justifyContent="space-evenly"
      >
        <Timer color="white" />
        <Text color="white" fontWeight="bold">
          {duration}m
        </Text>
      </Flex>
      <Box
        position="absolute"
        width="100%"
        h="1"
        left="0"
        bottom="0"
        bg="gray.400"
      />
      <Box
        position="absolute"
        width="25%"
        h="1"
        left="0"
        bottom="0"
        bg="brand.600"
        zIndex="2"
      />
    </CardHeader>
  );
}

type CBProps = {
  category: string;
  name: string;
  author: string;
  company: string;
};

function ContentBody({
  category = "COMMUNICATING AS A LEADER",
  name = "Peak Performance: Going From Good to Great with Simon Taudel",
  author = "Jane Doe",
  company = "Subway APAC",
}: CBProps) {
  return (
    <CardBody p="2" alignSelf="flex-start">
      <Flex direction="column" gap="4">
        <Box>
          <Text color="grey.700" fontWeight="medium">
            {category}
          </Text>
          <Heading size="md">{name}</Heading>
        </Box>
        <Flex direction="column">
          <Text color="grey.800">{author}</Text>
          <Text color="grey.700" fontWeight="bold">
            {company}
          </Text>
        </Flex>
      </Flex>
    </CardBody>
  );
}

function ContentFooter() {
  return (
    <CardFooter w="100%" p="4">
      <Spacer />
      <Flex gap="4" align="center">
        <ShareIcon color="brand.600" fontSize={22} />
        <Bookmark color="brand.600" fontSize={22} />
        {/* <Box>
          <IconButton
            aria-label="share-item"
            bg="none"
            p="0"
            icon={<ShareIcon color="brand.600" size={24} />}
            onClick={onPressShare}
          />
        </Box>
        <Box>
          <IconButton
            aria-label="bookmark-label"
            bg="none"
            p="0"
            icon={<Bookmark color="brand.600" size={24} />}
            onClick={onPressBookmark}
          />
        </Box> */}
      </Flex>
    </CardFooter>
  );
}
