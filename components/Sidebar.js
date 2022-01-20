import { Flex, Box, Text, CloseButton } from "@chakra-ui/react";
import { FiGrid, FiHome, FiSun, FiBookmark } from "react-icons/fi";
import { useEffect } from "react";
import { useRouter } from "next/router";
import NavLink from "./Navlink";
export default function SideBar({ onClose, ...rest }) {
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeComplete", onClose);
    return () => {
      router.events.off("routeChangeComplete", onClose);
    };
  }, [router.events, onClose]);
  const LinkItems = [
    { label: "Explore", icon: FiHome, href: "/" },
    { label: "Topics", icon: FiGrid, href: "/topics" },
    { label: "Digest", icon: FiSun, href: "/digest" },
    { label: "Bookmark", icon: FiBookmark, href: "/bookmark" },
  ];
  return (
    <Box
      transition="3s ease"
      bg="#f5f7f9"
      borderRight="1px"
      borderRightColor="gray.300"
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex mt={3}></Flex>
      <Flex alignItems="center" mx="8" justifyContent="flex-end">
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link, i) => (
        <NavLink key={i} link={link} />
      ))}
    </Box>
  );
}
