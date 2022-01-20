import {
  Avatar,
  Flex,
  IconButton,
  Spacer,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
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
      <IconButton
        mr={2}
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <Spacer />
      <SearchBox />
      <Spacer />
      <Flex mr={4} ml={2}>
        <Wrap>
          <WrapItem>
            <Avatar
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
              size="sm"
            />
          </WrapItem>
        </Wrap>
      </Flex>
    </Flex>
  );
}
