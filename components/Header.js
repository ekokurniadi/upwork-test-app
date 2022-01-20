import { Box, Flex, Heading, IconButton,Text } from "@chakra-ui/react";
import SearchBox from "./SearchBox";

export default function Header({ onOpen, ...rest }) {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px="4"
      position="sticky"
      top="0"
      height="20"
      zIndex="1"
      alignItems="center"
      bg="white"
      justifyContent={{ base: "space-between", md: "center" }}
    >
     <SearchBox/>
    </Flex>
  );
}
