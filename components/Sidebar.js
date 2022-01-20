import { Flex, Box, Text, CloseButton } from "@chakra-ui/react";
import { FiGrid, FiHome,FiSun,FiBookmark } from "react-icons/fi";
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
    { label: "Topics", icon: FiGrid, href: "/" },
    { label: "Digest", icon: FiSun, href: "/" },
    { label: "Bookmark", icon: FiBookmark, href: "/" },
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
    <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose}/>
      {LinkItems.map((link, i) => (
        <NavLink key={i} link={link}/>
      ))}
    </Box>
  );
}